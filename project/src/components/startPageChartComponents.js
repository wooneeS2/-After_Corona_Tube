import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
  VictoryScatter,
} from "victory";

import {
  monthlyAudience,
  monthlyRating,
  monthlyPatient,
  monthlyYoutube,
} from "../data/data1";

export function Chart1() {
  //TODO 차트 스타일은 theme이용해서 나중에 바꿔주기

  const avgs1 = monthlyYoutube.map(x => x.Avg_view_count);
  const avgs2 = monthlyPatient.map(x => x.patient);
  const max1 = Math.max(...avgs1);
  const max2 = Math.max(...avgs2);

  return (
    <>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        height={250}
      >
        <VictoryAxis
          tickFormat={monthlyYoutube.map(m => `${m.month}`)}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        />
        <VictoryLabel
          x={0}
          y={35}
          text={"인기동영상 조회수"}
          style={[{ fontSize: 10, fontFamily: "paybooc-Medium" }]}
        />
        <VictoryLabel
          x={250}
          y={30}
          text={"인기동영상 조회수"}
          backgroundStyle={[{ fill: "red", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 40, top: 3 }]}
        />
        <VictoryLabel
          x={298}
          y={50}
          text={"확진자 수"}
          backgroundStyle={[{ fill: "purple", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 20, top: 3 }]}
        />

        {/* 확진자 수 차트 */}

        <VictoryBar
          data={monthlyPatient}
          x="monthly"
          y={datum => datum.patient * 1.2}
          labels={({ datum }) => datum.patient / 100 + "명"}
          labelComponent={<VictoryTooltip />}
          style={{
            data: {
              fill: "purple",
            },
          }}
        />

        {/* 유튜브 조회수 */}
        <VictoryAxis
          dependentAxis
          tickFormat={x => `${x / 10000}k`}
          orientation="left"
        />
        <VictoryLine
          data={monthlyYoutube}
          x="monthy"
          y="Avg_view_count"
          labels={({ datum }) => Math.floor(datum.Avg_view_count) / 10}
          labelComponent={<VictoryTooltip />}
          style={{ data: { stroke: "pink", strokeWidth: 3 } }}
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
      </VictoryChart>
    </>
  );
}

export default Chart1;
