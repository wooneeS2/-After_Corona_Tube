import { style } from "@mui/system";
import React from "react";
import { VictoryLabel } from "victory";
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryGroup,
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

  const colors = ["#846462", "#df5e53", "#cf969e"];
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
        <VictoryLabel
          x={20}
          y={25}
          text={"조회수"}
          backgroundStyle={[{ fill: colors[0], opacity: 0.8 }]}
          textAnchor="start"
          backgroundPadding={{ left: 5, right: 15, top: 1, bottom: 1 }}
          style={[{ fill: "white", fontSize: 8 }]}
        />
        <VictoryLabel
          x={20}
          y={35}
          text={"좋아요 수"}
          backgroundStyle={[{ fill: colors[1], opacity: 0.8 }]}
          textAnchor="start"
          backgroundPadding={{ left: 5, right: 15, top: 1, bottom: 1 }}
          style={[{ fill: "white", fontSize: 8 }]}
        />
        <VictoryLabel
          x={20}
          y={45}
          text={"댓글 수"}
          backgroundStyle={[{ fill: colors[2], opacity: 0.8 }]}
          textAnchor="start"
          backgroundPadding={{ left: 5, right: 15, top: 1, bottom: 1 }}
          style={[{ fill: "white", fontSize: 8 }]}
        />

        <VictoryAxis
          tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
          tickFormat={
            [
              "영화&애니메이션",
              "자동차",
              "음악",
              "동물",
              "스포츠",
              "여행",
              "게임",
              "일상",
              "코미디",
              "엔터테인먼트",
              "뉴스",
              "노하우",
              "교육",
              "과학&기술",
              "사회&이슈",
            ]
            // [
            //   "🎬",
            //   "🚗",
            //   "🎵",
            //   "🐶",
            //   "⚽️",
            //   "✈️",
            //   "🎮",
            //   "🙋",
            //   "🤡",
            //   "🎡",
            //   "📰",
            //   "💡",
            //   "📖",
            //   "🔬",
            //   "🧐",
            // ]
          }
          style={{
            ticks: { stroke: "#0f0b0b" },
            axis: { stroke: "#0f0b0b" },
            tickLabels: {
              fontSize: 6,
              fontFamily: "paybooc-Medium",
              angle: 35,
              padding: 9,
            },
          }}
        />

        {/* TODO 처음 카테고리 버튼을 눌렀을 때 scatter만 먼저 다 떠있는 문제 고치기 */}
        {/* -> line 그래프와 scatter 그래프가 한번에 그려지도록 하고싶음 */}
        <VictoryGroup
          animate={{
            duration: 1500,
            onLoad: { duration: 200 },
          }}
        >
          <VictoryLine
            data={data[0]}
            style={{ data: { stroke: colors[0] } }}
            x="qoo"
            y={datum => datum.y / maxima[0]}
          />

          <VictoryScatter
            data={data[0]}
            x="qoo"
            y={datum => datum.y / maxima[0]}
            size={2.5}
            style={{ data: { fill: colors[0] } }}
            labels={data[0].map(m => m.y)}
            labelComponent={<VictoryTooltip renderInPortal />}
          />
          <VictoryLine
            data={data[1]}
            style={{ data: { stroke: colors[1], strokeWidth: 1 } }}
            x="qoo"
            y={datum => datum.y / maxima[1] / 1.3}
          />
          <VictoryScatter
            data={data[1]}
            x="qoo"
            y={datum => datum.y / maxima[1] / 1.3}
            size={2.5}
            style={{ data: { fill: colors[1] } }}
            labels={data[1].map(m => m.y)}
            labelComponent={<VictoryTooltip renderInPortal />}
          />
          <VictoryLine
            data={data[2]}
            style={{ data: { stroke: colors[2], strokeWidth: 1 } }}
            x="qoo"
            y={datum => datum.y / maxima[2] / 1.6}
          />
          <VictoryScatter
            data={data[2]}
            x="qoo"
            y={datum => datum.y / maxima[2] / 1.6}
            size={2.5}
            style={{ data: { fill: colors[2] } }}
            labels={data[2].map(m => m.y)}
            labelComponent={<VictoryTooltip renderInPortal />}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
