// Data extractor functions
// to parse selected data/queries into features, groupBy and params for Loud ML Model

import {
  DEFAULT_MODEL,
} from '../datasource/types';

export function extract_tooltip_feature(target: any) {
  if (target.select) {
    // InfluxDB or so
    return (
      target.select.length===1
      &&_formatFeature(target.select[0])
    )|| false
  } else {
    // OpenTSDB or so
    if (target.metric) {
      return target.metric
    }
  }
}

export function extract_group_by(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _formatGroupBy(target.groupBy)
  } else {
    // OpenTSDB or so
    if (target.aggregator && target.downsampleInterval && target.downsampleAggregator) {
      return target.aggregator + ":" + target.downsampleInterval + "-" + target.downsampleAggregator + "-nan"
    }
  }
}

export function extract_fill_value(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _formatFillValue(target.groupBy)
  } else {
    // OpenTSDB or so
    return "nan";
  }
}

export function extract_format_tags(target: any) {
  if (target.tags && target.tags.map) {
    // InfluxDB or so
    return target.tags.map(o => [o.key, o.operator, o.value].join(' ')).join(', ')
  }

  // OpenTSDB or so
  // 1 tag selected
  if (target.currentTagKey && target.currentTagValue) {
    return target.currentTagKey + " = " + target.currentTagValue
  }
  // 2 and more tags
  if (target.tags && typeof target.tags === 'object') {
    let res = [];
    for (const key in target.tags) {
      if (target.tags.hasOwnProperty(key)) {
        res.push(key + " = " + target.tags[key]);
      }
    }
    return res.join(', ');
  }
}

export function extract_is_valid(target: any) {
  if (target.select) {
    // InfluxDB or so
    return target.select.length===1
  } else {
    // OpenTSDB or so
    if (target.metric) {
      return true
    }
  }
}

export function extract_model_database(datasource: any) {
  // console.log(datasource);
  if (datasource.database) {
    return datasource.database;
  } else {
    return datasource.name.toLowerCase().replace(/-/g, "_");
  }
}

export function extract_model_measurement(target: any) {
  if (target.measurement) {
    // InfluxDB or so
    return target.measurement;
  } else {
    // OpenTSDB or so
    return target.metric;
  }
}

export function extract_model_select(target: any) {
  if (target.select) {
    // InfluxDB or so
    return _formatSelect(target.select[0])
  } else {
    // OpenTSDB or so
    if (target.metric && target.aggregator) {
      return target.aggregator + "_" + target.metric.replace(/\./g, "_")
    }
  }
}

export function extract_model_feature(target: any) {
  if (target.select) {
    // InfluxDB or so
    return _get_feature(target.select[0])
  } else {
    // OpenTSDB or so
    return target.metric
  }
}

export function extract_model_func(target: any) {
  if (target.select) {
    // InfluxDB or so
    return _get_func(target.select[0])
  } else {
    // OpenTSDB or so
    return target.aggregator
  }
}

export function extract_model_fill(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _get_fill(target.groupBy)
  } else {
    // OpenTSDB or so
    return 0 // TODO
  }
}

export function extract_model_time_format(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _formatTime(target.groupBy)
  } else {
    // OpenTSDB or so
    return target.downsampleInterval
  }
}

export function extract_model_time(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _get_time(target.groupBy)
  } else {
    // OpenTSDB or so
    return target.downsampleInterval
  }
}

export function extract_model_tags(target: any) {
  if (target.tags && target.tags.map) {
    // InfluxDB or so
    return _formatTags(target.tags)
  }

  // OpenTSDB or so
  // 1 tag selected
  if (target.currentTagKey && target.currentTagValue) {
    return target.currentTagKey + "_" + target.currentTagValue
  }
  // 2 and more tags
  if (target.tags && typeof target.tags === 'object') {
    let res = [];
    for (const key in target.tags) {
      if (target.tags.hasOwnProperty(key)) {
        res.push(key + "_" + target.tags[key]);
      }
    }
    return res.join('_');
  }
}

export function extract_model_tags_map(target: any) {
  if (target.tags && target.tags.map) {
    // InfluxDB or so
    return tags.map(
                    (tag) => ({
                                tag: tag.key,
                                value: tag.value,
                              })
                    )
  }

  // OpenTSDB or so
  // 1 tag selected
  if (target.currentTagKey && target.currentTagValue) {
    return {
      tag: target.currentTagKey,
      value: target.currentTagValue
    }
  }
  // 2 and more tags
  if (target.tags && typeof target.tags === 'object') {
    let res = [];
    for (const key in target.tags) {
      if (target.tags.hasOwnProperty(key)) {
        res.push({tag: key, value: target.tags[key]});
      }
    }
    return res;
  }
}

// Internal parser functions -------------------------------------------------

function _formatFeature(value) {
  // window.console.log('Feature Value', value);
  const selectField = value.filter(o => o.type==='field');
  return selectField.map(o => o.params.join(', ')).join('; ')
}

function _formatGroupBy(value: any) {
  // window.console.log('Group By Value', value);
  const groupBy = value.filter(o => o.type==='time');
  return groupBy.map(o => [o.type, o.params].join(': ')).join(', ')
  }

function _formatFillValue(value: any) {
  // window.console.log('Fill Value', value);
  const fill = value.filter(o => o.type==='fill');
  return fill.map(o => [o.type, o.params].join(': ')).join(', ')
}

function _formatSelect(value: any) {
  const selectFunc = value.filter(o => o.type!=='field');
  const selectField = value.filter(o => o.type==='field');

  return selectFunc.map(o => o.type).join('_') + '_' + selectField.map(o => o.params.join('_')).join('_')
}

function _formatTime(value: any) {
  const groupBy = value.filter(o => o.type==='time');
  return groupBy.map(o => [o.type, o.params].join('_')).join('_')
}

function _get_feature(value: any) {
  const field = value.filter(o => o.type==='field');
  if (field.length === 0) {
    // TODO: check how we ended up with empty field and allowed user to click ML Button
    return "";
  }
  return field[0].params[0];
}

function _get_func(value: any) {
  const func = value.filter(o => o.type!=='field');
  if (func.length === 0) {
    return "";
  }
  return func[0].type;
}

function _get_fill(value: any) {
  const fill = value.filter(o => o.type==='fill');
  if (fill.length === 0) {
    return "null";
  }
  return fill[0].params[0];
}

function _get_time(value: any) {
  const time = value.filter(o => o.type==='time');
  if (time.length !== 1) {
    return DEFAULT_MODEL.interval;
  }
  return time[0].params[0];
}

function _formatTags(value: any) {
  return value.map(o => [o.key, o.value].join('_')).join('_')
}
