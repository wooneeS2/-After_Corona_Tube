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

export function Chart2() {
  //TODO 차트 스타일은 theme이용해서 나중에 바꿔주기
  // console.log(monthlyYoutube.map(x => x.Avg_view_count));
  return (
    <>
      <VictoryChart height={250} domainPadding={30}>
        <VictoryAxis
          tickFormat={monthlyAudience.map(m => `${m.month}`)}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        />
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

        {/* 차트 */}
        <VictoryLine
          data={monthlyAudience}
          x={monthlyAudience.map(index => index.month)}
          y={"audience"}
          style={{
            data: {
              stroke: "red",
              strokeWidth: 3,
            },
          }}
        />
        <VictoryScatter
          data={monthlyAudience}
          x="qoo"
          y={"audience"}
          size={2.5}
          style={{ data: { fill: "black" } }}
          labels={monthlyAudience.map(x => `${Math.floor(x.audience)}명`)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
        <VictoryLine
          data={monthlyRating}
          x={monthlyRating.map(index => index.month)}
          y={"rating"}
          style={{
            data: {
              stroke: "blue",
              strokeWidth: 3,
            },
          }}
        />

        <VictoryScatter
          data={monthlyRating}
          x="qoo"
          y={"rating"}
          size={2.5}
          style={{ data: { fill: "black" } }}
          labels={monthlyRating.map(
            x => (x.rating * 0.000001).toFixed(2) + "%"
          )}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
        <VictoryLine
          data={monthlyYoutube}
          x={monthlyYoutube.map(index => index.Avg_view_count)}
          y={"Avg_view_count"}
          style={{
            data: {
              stroke: "green",
              strokeWidth: 3,
            },
          }}
        />
        <VictoryScatter
          data={monthlyYoutube}
          x="qoo"
          y={"Avg_view_count"}
          size={2.5}
          style={{ data: { fill: "black" } }}
          labels={monthlyYoutube.map(x => `${Math.floor(x.Avg_view_count)}회`)}
          labelComponent={<VictoryTooltip renderInPortal />}
        />
      </VictoryChart>
    </>
  );
}
