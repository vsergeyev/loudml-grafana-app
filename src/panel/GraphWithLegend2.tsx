// Libraries

import React from 'react';
import { css } from 'emotion';
import { GraphSeriesValue } from '@grafana/data';

import { Graph2 } from './Graph2';
import { LegendRenderOptions, LegendItem, LegendDisplayMode } from '@grafana/ui';
import { Graph, GraphProps, GraphLegend } from '@grafana/ui';
import { CustomScrollbar } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';

// import { GraphCtrl } from 'grafana/app/plugins/panel/graph';

export type SeriesOptionChangeHandler<TOption> = (label: string, option: TOption) => void;
export type SeriesColorChangeHandler = SeriesOptionChangeHandler<string>;
export type SeriesAxisToggleHandler = SeriesOptionChangeHandler<number>;

export interface GraphWithLegendProps extends GraphProps, LegendRenderOptions {
  isLegendVisible: boolean;
  displayMode: LegendDisplayMode;
  sortLegendBy?: string;
  sortLegendDesc?: boolean;
  onSeriesColorChange?: SeriesColorChangeHandler;
  onSeriesAxisToggle?: SeriesAxisToggleHandler;
  onSeriesToggle?: (label: string, event: React.MouseEvent<HTMLElement>) => void;
  onToggleSort: (sortBy: string) => void;
}

const getGraphWithLegendStyles = stylesFactory(({ placement }: GraphWithLegendProps) => ({
  wrapper: css`
    display: flex;
    flex-direction: ${placement === 'under' ? 'column' : 'row'};
    height: 100%;
  `,
  graphContainer: css`
    min-height: 65%;
    flex-grow: 1;
  `,
  legendContainer: css`
    padding: 25px 0;
    max-height: ${placement === 'under' ? '35%' : 'none'};
  `,
}));

const shouldHideLegendItem = (data: GraphSeriesValue[][], hideEmpty = false, hideZero = false) => {
  const isZeroOnlySeries = data.reduce((acc, current) => acc + (current[1] || 0), 0) === 0;
  const isNullOnlySeries = !data.reduce((acc, current) => acc && current[1] !== null, true);

  return (hideEmpty && isNullOnlySeries) || (hideZero && isZeroOnlySeries);
};

export const GraphWithLegend2: React.FunctionComponent<GraphWithLegendProps> = (props: GraphWithLegendProps) => {
  const {
    series,
    timeRange,
    width,
    height,
    showBars,
    showLines,
    showPoints,
    sortLegendBy,
    sortLegendDesc,
    isLegendVisible,
    displayMode,
    placement,
    onSeriesAxisToggle,
    onSeriesColorChange,
    onSeriesToggle,
    onToggleSort,
    hideEmpty,
    hideZero,
    isStacked,
    lineWidth,
    fill,
    fillGradient,
    onHorizontalRegionSelected,
    timeZone,
    children,
    panelChrome
  } = props;
  const { graphContainer, wrapper, legendContainer } = getGraphWithLegendStyles(props);

  const legendItems = series.reduce<LegendItem[]>((acc, s) => {
    return shouldHideLegendItem(s.data, hideEmpty, hideZero)
      ? acc
      : acc.concat([
          {
            label: s.label,
            color: s.color,
            isVisible: s.isVisible,
            yAxis: s.yAxis.index,
            displayValues: s.info || [],
          },
        ]);
  }, []);

  return (
    <div className={wrapper}>
      <div className={graphContainer}>
        <Graph2
          series={series}
          timeRange={timeRange}
          timeZone={timeZone}
          showLines={showLines}
          showPoints={showPoints}
          showBars={showBars}
          width={width}
          height={height}
          key={isLegendVisible ? 'legend-visible' : 'legend-invisible'}
          isStacked={isStacked}
          lineWidth={lineWidth}
          fill={fill}
          fillGradient={fillGradient}
          panelChrome={panelChrome}
          onHorizontalRegionSelected={onHorizontalRegionSelected}
        >
          {children}
        </Graph2>
      </div>

      {isLegendVisible && (
        <div className={legendContainer}>
          <CustomScrollbar hideHorizontalTrack>
            <GraphLegend
              items={legendItems}
              displayMode={displayMode}
              placement={placement}
              sortBy={sortLegendBy}
              sortDesc={sortLegendDesc}
              onLabelClick={(item, event) => {
                if (onSeriesToggle) {
                  onSeriesToggle(item.label, event);
                }
              }}
              onSeriesColorChange={onSeriesColorChange}
              onSeriesAxisToggle={onSeriesAxisToggle}
              onToggleSort={onToggleSort}
            />
          </CustomScrollbar>
        </div>
      )}


    </div>
  );
};
