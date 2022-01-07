import {
  VictoryChart,
  VictoryScatter,
  VictoryTooltip,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
} from "victory";
import {
  monthlyAudience,
  monthlyRating,
  monthlyYoutube,
} from "../../data/data1";

export function MediaTrendChart() {
  return (
    <>
      <VictoryChart height={250} domainPadding={30}>
        {/* x축 */}
        <VictoryAxis
          tickFormat={monthlyAudience.map(m => `${m.month}`)}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        />
        {/* 그래프 제목 라벨 */}
        <VictoryLabel
          x={350}
          y={60}
          text={"영화 관람객 수"}
          backgroundStyle={[{ fill: "red", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 35, top: 3 }]}
        />
        <VictoryLabel
          x={350}
          y={80}
          text={"TV 시청률"}
          backgroundStyle={[{ fill: "blue", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 20, top: 3 }]}
        />
        <VictoryLabel
          x={350}
          y={100}
          text={"Youtube 조회수"}
          backgroundStyle={[{ fill: "green", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 20, top: 3 }]}
        />

        {/* 영화 관람객 수 차트 */}
        <VictoryLine
          data={monthlyAudience}
          x={monthlyAudience.map(index => index.month)}
          y={"audience"}
          style={{
            data: {
              stroke: "#f68888",
              strokeWidth: 3,
            },
          }}
        />
        <VictoryScatter
          data={monthlyAudience}
          y={"audience"}
          size={2.5}
          style={{ data: { fill: "#8e0b0b" } }}
          labels={monthlyAudience.map(x => `${Math.floor(x.audience)}명`)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
        {/* 시청률 차트 */}
        <VictoryLine
          data={monthlyRating}
          x={monthlyRating.map(index => index.month)}
          y={"rating"}
          style={{
            data: {
              stroke: "#a2a4f6",
              strokeWidth: 3,
            },
          }}
        />

        <VictoryScatter
          data={monthlyRating}
          y={"rating"}
          size={2.5}
          style={{ data: { fill: "#090b5d" } }}
          labels={monthlyRating.map(
            x => (x.rating * 0.000001).toFixed(2) + "%"
          )}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
        {/* 유튜브 조회수 차트 */}
        <VictoryLine
          data={monthlyYoutube}
          x={monthlyYoutube.map(index => index.Avg_view_count)}
          y={"Avg_view_count"}
          style={{
            data: {
              stroke: "#a1c99c",
              strokeWidth: 3,
            },
          }}
        />
        <VictoryScatter
          data={monthlyYoutube}
          y={"Avg_view_count"}
          size={2.5}
          style={{ data: { fill: "#3b6336" } }}
          labels={monthlyYoutube.map(x => `${Math.floor(x.Avg_view_count)}회`)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
      </VictoryChart>
    </>
  );
}
