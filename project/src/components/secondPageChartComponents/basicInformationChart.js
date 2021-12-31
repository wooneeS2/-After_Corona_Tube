import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

export function BasicInformationChart() {
  return (
    <VictoryChart
      domainPadding={80}
      width={350}
      padding={{ top: 10, bottom: 80 }}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["영상 수", " 조회수", "좋아요 수", "댓글 수"]}
      />
      <VictoryAxis
        dependentAxis
        orientation="left"
        standalone={false}
        offsetX={40}
      />
      <VictoryBar
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
        ]}
        dy={30}
      />
    </VictoryChart>
  );
}
