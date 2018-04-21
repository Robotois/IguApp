import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryArea, VictoryTheme, VictoryScatter } from 'victory-native';
import { colors } from '../../styles/colors';

const defaultData = [
  { x: 'Lun', y: 0 },
  { x: 'Mar', y: 2 },
  { x: 'Mie', y: 1 },
  { x: 'Jue', y: 4 },
  { x: 'Vie', y: 3 },
  { x: 'Sab', y: 2 },
  { x: 'Dom', y: 2 },
];

const Chart = ({ data }) => (
  <VictoryChart
    height={175}
    padding={{ top: 20, bottom: 40, left: 20, right: 20 }}
  >
    <VictoryArea
      style={{
        data: {
          stroke: colors.cyan, strokeWidth: 3, fill: colors.cyan, fillOpacity: 0.1,
        },
      }}
      data={data}
      interpolation="catmullRom"
    />
    <VictoryScatter
      data={data}
      size={5}
      style={{ data: { fill: colors.cyan } }}
    />
    <VictoryAxis />
  </VictoryChart>
);

Chart.defaultProps = {
  data: defaultData,
};

export default Chart;
