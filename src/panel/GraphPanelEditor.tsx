//// Libraries
import _ from 'lodash';
import React, { PureComponent } from 'react';

// Services
import { getDataSourceSrv } from '@grafana/runtime';

// Types
import { PanelEditorProps, FieldConfig, DataSourceSelectItem } from '@grafana/data';
import {
  Switch,
  LegendOptions,
  GraphTooltipOptions,
  PanelOptionsGrid,
  PanelOptionsGroup,
  FieldPropertiesEditor,
  Select,
  // DataSourcePicker,
} from '@grafana/ui';

// import { DataSourcePicker } from 'grafana/app/core/components/Select/DataSourcePicker';
// <DataSourcePicker datasources={this.datasources} onChange={this.onChangeDataSource} current={this.currentDS()} />

import { Options, GraphOptions, GraphDatasourceOptions } from './types';
import { GraphLegendEditor } from './GraphLegendEditor';

export class GraphPanelEditor extends PureComponent<PanelEditorProps<Options>> {
  datasources: DataSourceSelectItem[] = getDataSourceSrv().getMetricSources();
  // datasources:DataSourceApi = getDataSourceSrv() as unknown as DataSourceApi;

  datasourcesList = function() {
    var res = new Array({ label: 'Not selected', value: '' });

    // window.console.log(this.datasources);
    this.datasources.forEach(function (val) {
      if (val.meta.id === "loudml-datasource") {
        res.push({label: val.name, value: val.value});
      }
    });

    return res;
  }

  onChangeDataSource = (value: any) => {
    window.console.log(value);
    window.console.log(this);
    this.props.options.datasourceOptions.datasource = value.value;
    this.setState({ value: value.value });
  };

  onGraphOptionsChange = (options: Partial<GraphOptions>) => {
    this.props.onOptionsChange({
      ...this.props.options,
      graph: {
        ...this.props.options.graph,
        ...options,
      },
    });
  };

  onLegendOptionsChange = (options: LegendOptions) => {
    this.props.onOptionsChange({ ...this.props.options, legend: options });
  };

  onTooltipOptionsChange = (options: GraphTooltipOptions) => {
    this.props.onOptionsChange({ ...this.props.options, tooltipOptions: options });
  };

  onToggleLines = () => {
    this.onGraphOptionsChange({ showLines: !this.props.options.graph.showLines });
  };

  onToggleBars = () => {
    this.onGraphOptionsChange({ showBars: !this.props.options.graph.showBars });
  };

  onTogglePoints = () => {
    this.onGraphOptionsChange({ showPoints: !this.props.options.graph.showPoints });
  };

  onDefaultsChange = (field: FieldConfig) => {
    this.props.onOptionsChange({
      ...this.props.options,
      fieldOptions: {
        ...this.props.options.fieldOptions,
        defaults: field,
      },
    });
  };

  render() {
    const {
      graph: { showBars, showPoints, showLines },
      tooltipOptions: { mode },
      datasourceOptions: { datasource },
    } = this.props.options;

    return (
      <>
        <div className="section gf-form-group">
          <h5 className="section-heading">Draw Modes</h5>
          <Switch label="Lines" labelClass="width-5" checked={showLines} onChange={this.onToggleLines} />
          <Switch label="Bars" labelClass="width-5" checked={showBars} onChange={this.onToggleBars} />
          <Switch label="Points" labelClass="width-5" checked={showPoints} onChange={this.onTogglePoints} />
        </div>
        <div className="section gf-form-group">
          <h5 className="section-heading">Loud ML Server</h5>
          <Select
              value={{ value: datasource, label: datasource }}
              onChange={value => {
                this.onChangeDataSource({ value: value.value as any });
              }}
              options={this.datasourcesList()}
            />
        </div>
        <PanelOptionsGrid>
          <PanelOptionsGroup title="Field">
            <FieldPropertiesEditor
              showMinMax={false}
              onChange={this.onDefaultsChange}
              value={this.props.options.fieldOptions.defaults}
            />
          </PanelOptionsGroup>
          <PanelOptionsGroup title="Tooltip">
            <Select
              value={{ value: mode, label: mode === 'single' ? 'Single' : 'All series' }}
              onChange={value => {
                this.onTooltipOptionsChange({ mode: value.value as any });
              }}
              options={[
                { label: 'All series', value: 'multi' },
                { label: 'Single', value: 'single' },
              ]}
            />
          </PanelOptionsGroup>
          <GraphLegendEditor options={this.props.options.legend} onChange={this.onLegendOptionsChange} />
        </PanelOptionsGrid>
      </>
    );
  }
}
