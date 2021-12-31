import React from "react";
import { VictoryLabel } from "victory";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

export function BasicInformationChart({ datas }) {
  const videos = [];
  const likes = [];
  const views = [];
  const comments = [];
  const labelData = [];
  datas.map(x => {
    labelData.push(x.numb_videos);
    labelData.push(x.view_cnt);
    labelData.push(x.likes_cnt);
    labelData.push(x.comment_cnt);
  });
  datas.map(m => {
    videos.push({ x: "numb_videos", y: m.numb_videos, fill: "#623030" });
    views.push({ x: "veiw_cnt", y: m.view_cnt / 100000, fill: "#9c4c4c" });
    likes.push({ x: "likes_cnt", y: m.likes_cnt / 10000, fill: "#c46060" });
    comments.push({
      x: "comment_cnt",
      y: m.comment_cnt / 10000,
      fill: "#cf7f7f",
    });
  });

  const data = [...videos, ...views, ...likes, ...comments];

  const colors = ["#ff0000", "#850000", "#ff3e3e", "#ff9595"];
  return (
    <VictoryChart
      domainPadding={80}
      width={350}
      height={400}
      padding={{ top: 10, bottom: 110 }}
      animate={{ duration: 500, onLoad: { duration: 100 } }}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["영상", " 조회", "좋아요", "댓글"]}
      />

      <VictoryLabel x={170} y={330} text={"(수)"} style={{ fontSize: 15 }} />

      <VictoryBar
        data={data}
        x={datum => datum.x}
        y={datum => datum.y}
        labels={labelData.map(x =>
          x > 1000000
            ? `${Math.floor(x / 1000000).toLocaleString("en-US")}M`
            : `${(x / 1000).toFixed(2)}K`
        )}
        style={{ data: { fill: ({ datum }) => datum.fill } }}
      />
    </VictoryChart>
  );
}
