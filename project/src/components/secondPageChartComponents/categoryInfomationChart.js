import React from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryScatter,
} from "victory";

export function CategoryInfomationChart({ datas }) {
  const likes = [];
  const views = [];
  const comments = [];
  datas.map(m => {
    likes.push({ x: m.categoryId, y: m.likes });
    views.push({ x: m.categoryId, y: m.view_count });
    comments.push({ x: m.categoryId, y: m.comment_count });
  });

  const data = [views, likes, comments];
  // find maxima for normalizing data
  const maxima = data.map(dataset => Math.max(...dataset.map(d => d.y)));

  const colors = ["black", "red", "blue"];
  //TODO 툴팁 디자인 및 위치 수정
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        width={350}
        height={200}
        containerComponent={
          <VictoryVoronoiContainer labels={datum => datum.y} />
        }
      >
        <VictoryAxis
          tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
          tickFormat={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        />

        <VictoryLine
          data={data[0]}
          style={{ data: { stroke: colors[0] } }}
          // normalize data
          x="qoo"
          y={datum => datum.y / maxima[0]}
        />

        <VictoryScatter
          data={data[0]}
          x="qoo"
          y={datum => datum.y / maxima[0]}
          size={2.5}
          style={{ data: { fill: "black" } }}
          labels={data[0].map(m => m.y)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
        <VictoryLine
          data={data[1]}
          style={{ data: { stroke: colors[1], strokeWidth: 1 } }}
          // normalize data
          x="qoo"
          y={datum => datum.y / maxima[1] / 1.3}
        />
        <VictoryScatter
          data={data[1]}
          x="qoo"
          y={datum => datum.y / maxima[1] / 1.3}
          size={2.5}
          style={{ data: { fill: "red" } }}
          labels={data[1].map(m => m.y)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
        <VictoryLine
          data={data[2]}
          style={{ data: { stroke: colors[2], strokeWidth: 1 } }}
          // normalize data
          x="qoo"
          y={datum => datum.y / maxima[2] / 1.6}
        />
        <VictoryScatter
          data={data[2]}
          x="qoo"
          y={datum => datum.y / maxima[2] / 1.6}
          size={2.5}
          style={{ data: { fill: "blue" } }}
          labels={data[2].map(m => m.y)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
      </VictoryChart>
    </div>
  );
}
