import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import movieData from "../data/data1/data1-2.json";
import tvData from "../data/data1/data1-3.json";

export function Chart1() {
  //TODO 차트 스타일은 theme이용해서 나중에 바꿔주기
  const data = [
    { quarter: 1, patient: 1000, fill: "red" },
    { quarter: 2, patient: 3000, fill: "orange" },
    { quarter: 3, patient: 5000, fill: "green" },
    { quarter: 4, patient: 7000, fill: "blue" },
  ];
  const data2 = [
    { quarter: 1, viewCount: 10000 },
    { quarter: 2, viewCount: 20000 },
    { quarter: 3, viewCount: 30000 },
    { quarter: 4, viewCount: 40000 },
  ];

  return (
    <>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        height={250}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["1단계", "2단계", "3단계", "4단계"]}
        />
        <VictoryLabel
          x={1}
          y={35}
          text={"확진자 수"}
          style={[{ fontSize: 10, fontFamily: "paybooc-Medium" }]}
        />
        <VictoryLabel x={300} y={35} text={"조회수"} />
        <VictoryLabel x={20} y={200} text={"(명)"} />
        <VictoryLabel x={310} y={200} text={"(회)"} />
        {/* //TODO 왼쪽 오른쪽 라벨의 기준을 다르게해야함. */}
        {/* 확진자 수  */}
        <VictoryAxis
          dependentAxis
          tickValues={[1000, 3000, 5000, 7000]}
          tickFormat={x => x}
          orientation="left"
        />
        {/* <VictoryAxis
          dependentAxis
          offsetX={50}
          orientation="left"
          standalone={false}
        /> */}
        {/* 조회수 */}
        <VictoryAxis
          dependentAxis
          // tickValues={[10000, 20000, 30000, 40000]}
          tickFormat={x => `${x / 1000}k`}
          orientation="right"
        />
        {/* <VictoryAxis dependentAxis domain={[0, 50]} orientation="right" /> */}
        {/* 차트 */}
        <VictoryBar
          data={data}
          x="quarter"
          y="patient"
          labels={({ datum }) => datum.patient}
          labelComponent={<VictoryTooltip />}
          style={{
            data: {
              fill: ({ datum }) => datum.fill,
            },
          }}
        />
        <VictoryLine
          data={data2}
          x={"quarter"}
          y="viewCount"
          labels={({ datum }) => datum.viewCount}
          labelComponent={
            <VictoryLabel renderInPortal dy={-10} style={[{ fontSize: 8 }]} />
          }
          style={{ data: { stroke: "pink", strokeWidth: 3 } }}
        />
      </VictoryChart>
    </>
  );
}

export function Chart2() {
  //TODO 차트 스타일은 theme이용해서 나중에 바꿔주기

  return (
    <>
      <VictoryChart height={250} domainPadding={30}>
        <VictoryAxis
          tickFormat={movieData.map(m => `${m.month}`)}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        />
        <VictoryLabel
          x={350}
          y={60}
          text={"TV 시청률"}
          backgroundStyle={[{ fill: "red", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 20, top: 3 }]}
        />
        <VictoryLabel
          x={350}
          y={80}
          text={"영화관 관람객 수 "}
          backgroundStyle={[{ fill: "blue", opacity: 0.2 }]}
          textAnchor="start"
          backgroundPadding={[{ left: 5, right: 35, top: 3 }]}
        />

        <VictoryLine
          data={movieData}
          x={movieData.map(index => index.month)}
          y={"audience"}
          style={{
            data: {
              stroke: "red",
              strokeWidth: 3,
            },
          }}
        />
        <VictoryLine
          data={tvData}
          x={tvData.map(index => index)}
          y={"rating"}
          style={{
            data: {
              stroke: "blue",
              strokeWidth: 3,
            },
          }}
        />
      </VictoryChart>
    </>
  );
}

export default Chart1;
