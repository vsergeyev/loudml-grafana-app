// @ts-nocheck
import React from 'react';
import { Chart, LegendDisplayMode } from '@grafana/ui';
import { GraphWithLegend2 } from './GraphWithLegend2';
import { PanelProps } from '@grafana/data';
import { Options } from './types';
import { GraphPanelController, CreateBaselineButton, MLModelController } from './GraphPanelController';

interface GraphPanelProps extends PanelProps<Options> {}

export const GraphPanel: React.FunctionComponent<GraphPanelProps> = ({
  data,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  onOptionsChange,
  onChangeTimeRange,
}) => {
  if (!data) {
    return (
      <div className="panel-empty">
        <p>No data found in response</p>
      </div>
    );
  }

  const {
    graph: { showLines, showBars, showPoints, isStacked, lineWidth, fill, fillGradient },
    legend: legendOptions,
    tooltipOptions,
  } = options;

  const graphProps = {
    showBars,
    showLines,
    showPoints,
    isStacked,
    lineWidth,
    fill,
    fillGradient,
    tooltipOptions,
  };
  const { asTable, isVisible, ...legendProps } = legendOptions;

  return (
    <>
      <CreateBaselineButton data={data} timeRange={timeRange} timeZone={timeZone} panelOptions={options} onOptionsChange={onOptionsChange} />

      <MLModelController data={data} timeRange={timeRange} timeZone={timeZone} panelOptions={options} onOptionsChange={onOptionsChange} />

      <GraphPanelController data={data} timeZone={timeZone} options={options} onOptionsChange={onOptionsChange} onChangeTimeRange={onChangeTimeRange}>
        {({ onSeriesToggle, onHorizontalRegionSelected, ...controllerApi }) => {
          return (
            <GraphWithLegend2
              timeRange={timeRange}
              timeZone={timeZone}
              width={width}
              height={height}
              legendDisplayMode={asTable ? LegendDisplayMode.Table : LegendDisplayMode.List}
              isLegendVisible={isVisible}
              placement={legendOptions.placement}
              sortLegendBy={legendOptions.sortBy}
              sortLegendDesc={legendOptions.sortDesc}
              onSeriesToggle={onSeriesToggle}
              onHorizontalRegionSelected={onHorizontalRegionSelected}
              onClick={onHorizontalRegionSelected}
              {...graphProps}
              {...controllerApi}
            >
              <Chart.Tooltip mode={tooltipOptions.mode} />
            </GraphWithLegend2>
          );
        }}
      </GraphPanelController>
    </>
  );
};
