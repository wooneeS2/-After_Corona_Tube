import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine } from "victory";

export function TimeInfomationChart() {
  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <>
      <VictoryChart
        domainPadding={80}
        width={400}
        padding={{ top: 20, bottom: 80 }}
      >
        <VictoryAxis
          tickValues={times}
          tickFormat={times}
          fixLabelOverlap={true}
        />
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 12 },
            { x: 2, y: 13 },
            { x: 3, y: 15 },
            { x: 4, y: 14 },
            { x: 5, y: 17 },
            { x: 6, y: 17 },
            { x: 7, y: 17 },
            { x: 8, y: 17 },
            { x: 9, y: 17 },
            { x: 10, y: 17 },
            { x: 11, y: 17 },
            { x: 12, y: 17 },
            { x: 13, y: 17 },
            { x: 14, y: 17 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#5B14BF" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 20 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 12 },
            { x: 5, y: 23 },
            { x: 6, y: 72 },
            { x: 7, y: 71 },
            { x: 8, y: 73 },
            { x: 9, y: 17 },
            { x: 10, y: 37 },
            { x: 11, y: 47 },
            { x: 12, y: 67 },
            { x: 13, y: 37 },
            { x: 14, y: 27 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#14BF39" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 20 },
            { x: 2, y: 35 },
            { x: 3, y: 55 },
            { x: 4, y: 15 },
            { x: 5, y: 24 },
            { x: 6, y: 75 },
            { x: 7, y: 75 },
            { x: 8, y: 73 },
            { x: 9, y: 47 },
            { x: 10, y: 37 },
            { x: 11, y: 47 },
            { x: 12, y: 67 },
            { x: 13, y: 37 },
            { x: 14, y: 27 },
          ]}
        />
      </VictoryChart>
    </>
  );
}
