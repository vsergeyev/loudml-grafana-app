/*eslint-disable */
// Data extractor functions
// to parse selected data/queries into features, groupBy and params for Loud ML Model

import {
  DEFAULT_MODEL,
} from '../datasource/types';

export function extract_tooltip_feature(target: any): any {
  if (target.select) {
    // InfluxDB or PostgreSQL or so
    if (target.measurement) {
      // InfluxDB
      return target.measurement + ": " + target.select
        .map(o => _formatFeature(o))
        .join(', ');
      // return target.measurement + ": " + _formatFeature(target.select[0])
    }

    if (target.table) {
      // PostgreSQL
      return target.table + ": " + target.select[0]
        .filter(o => o.type==='column')
        .map(o => o.params.join(', ')).join('; ')
    }
  }

  if (target.metric) {
    // OpenTSDB or so
    return target.metric
  }

  if (target.expr) {
    // Prometheus or so
    return target.expr
  }

  if (target.query && target.bucketAggs && target.metrics && target.metrics.length > 0) {
    // Elasticsearch or so
    return target.metrics[0].type + ": " + target.metrics[0].field
  }
}

export function extract_group_by(target: any): any {
  if (target.groupBy) {
    // InfluxDB or so
    return _formatGroupBy(target.groupBy)
  }

  if (target.group) {
    // PostgreSQL or so
    return target.group
      .filter(o => o.type==='time')
      .map(o => [o.type, o.params[0]].join(': ')).join(', ')
  }

  if (target.aggregator && target.downsampleInterval && target.downsampleAggregator) {
    // OpenTSDB or so
    return target.aggregator + ":" + target.downsampleInterval + "-" + target.downsampleAggregator + "-nan"
  }

  if (target.expr) {
    // Prometheus or so
    return target.interval || "auto"
  }

  if (target.query && target.bucketAggs && target.bucketAggs.length>0) {
    // Elasticsearch or so
    if (target.bucketAggs[0].settings) {
      return target.bucketAggs[0].settings.interval;
    }
    return "auto"
  }
}

export function extract_fill_value(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _formatFillValue(target.groupBy)
  }

  if (target.group) {
    // PostgreSQL or so
    return target.group
      .filter(o => o.type==='time')
      .map(o => o.params[1]).join(', ')
  }

  // OpenTSDB or Prometheus or so
  return "nan";
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

  if (target.where) {
    // PostgreSQL or so
    return target.where
      .filter(o => o.type==='expression')
      .map(o => o.params.join(' ')).join(', ')
  }

  if (target.query) {
    // Elasticsearch or so
    return target.query
  }
}

export function extract_is_valid(target: any) {
  if (target.select) {
    // InfluxDB or so
    return true
  }

  if (target.metric) {
    // OpenTSDB or so
    return true
  }

  if (target.expr) {
    // Prometheus or so
    return true
  }

  if (target.query && target.bucketAggs && target.metrics && target.metrics.length > 0) {
    // Elasticsearch or so
    return true
  }
}

export function extract_model_database(datasource: any) {
  // console.log(datasource);
  if (datasource.database) {
    // InfluxDB
    return datasource.database;
  }

  if (datasource.index) {
    // Elasticsearch
    return datasource.index;
  }

  return datasource.name.toLowerCase().replace(/-/g, "_");
}

export function extract_model_measurement(target: any) {
  if (target.measurement) {
    // InfluxDB or so
    return target.measurement;
  }

  if (target.metric) {
    // OpenTSDB or so
    return target.metric;
  }

  if (target.query && target.bucketAggs && target.metrics && target.metrics.length > 0) {
    // Elasticsearch or so
    return target.metrics[0].type;
  }

  return "auto";
}

export function extract_model_select(target: any, field: any) {
  if (target.select) {
    // InfluxDB or so
    return _formatSelect(field);
  }

  if (target.metric && target.aggregator) {
    // OpenTSDB or so
    return target.aggregator + "_" + target.metric.replace(/\./g, "_");
  }

  if (target.query && target.bucketAggs && target.metrics && target.metrics.length > 0) {
    // Elasticsearch or so
    return target.metrics[0].type + "_" + target.metrics[0].field.replace(/\./g, "_");
  }

  if (target.expr) {
    // Prometheus or so
    return string_to_slug(target.expr);
  }
}

export function extract_model_feature(target: any, field: any) {
  if (target.select) {
    // InfluxDB or so
    return _get_feature(field)
  }

  if (target.metric) {
    // OpenTSDB or so
    return target.metric
  }

  if (target.query && target.bucketAggs && target.metrics && target.metrics.length > 0) {
    // Elasticsearch or so
    return target.metrics[0].field
  }

  if (target.expr) {
    // Prometheus or so
    return target.expr
  }
}

export function extract_model_func(target: any, field: any) {
  if (target.select) {
    // InfluxDB or so
    return _get_func(field)
  }

  if (target.aggregator) {
    // OpenTSDB or so
    return target.aggregator
  }

  if (target.query && target.bucketAggs && target.metrics && target.metrics.length > 0) {
    // Elasticsearch or so
    return target.metrics[0].type
  }

  return "avg"
}

export function extract_model_fill(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    const f = _get_fill(target.groupBy);
    if (f == "0") {
      return 0;
    }
    return f;
  }
  // OpenTSDB or so
  return 0 // TODO
}

export function extract_model_time_format(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _formatTime(target.groupBy)
  } else {
    // OpenTSDB or Prometheus or so
    return target.downsampleInterval || target.interval || "auto"
  }
}

export function extract_model_time(target: any) {
  if (target.groupBy) {
    // InfluxDB or so
    return _get_time(target.groupBy)
  }

  if (target.query && target.bucketAggs && target.bucketAggs.length > 0 && target.bucketAggs[0].settings) {
    // Elasticsearch or so
    return target.bucketAggs[0].settings.interval
  }

  // else - OpenTSDB or Prometheus or so
  return target.downsampleInterval || target.interval || "20m"
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
    return res.join('_')
  }

  return ""
}

export function extract_model_tags_map(target: any) {
  if (target.tags && target.tags.map) {
    // InfluxDB or so
    return target.tags.map(
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
    return res
  }

  return []
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

function string_to_slug(str: any) {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '_');

  return str;
}
