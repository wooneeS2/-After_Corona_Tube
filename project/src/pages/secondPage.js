import React from "react";
import "../design/secondPage.css";
import "../design/wordcloud.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";
import { useState } from "react";

export function SecondPage() {
  const [information, setInformation] = useState(true);
  const [time, setTime] = useState(false);
  const [category, setCategory] = useState(false);
  const [word, setWord] = useState(false);

  const chartList = [setInformation, setTime, setCategory, setWord];

  const isTurnOn = chartNo => {
    chartList[chartNo](true);
    const newList = chartList.filter(x => x !== chartList[chartNo]);
    newList.map(x => x(false));
  };

  return (
    <div className="second-chart">
      <div className="row-btn" id="row-btn0"></div>
      <button className="row-btn" id="row-btn1">
        기간1
      </button>
      <button className="row-btn" id="row-btn2">
        기간2
      </button>
      <button className="row-btn" id="row-btn3">
        기간3
      </button>
      <button className="row-btn" id="row-btn4">
        기간4
      </button>

      <button
        className="column-btn"
        id="column-btn1"
        onClick={() => isTurnOn(0)}
      >
        기본정보
      </button>
      <button
        className="column-btn"
        id="column-btn2"
        onClick={() => isTurnOn(1)}
      >
        시간
      </button>
      <button
        className="column-btn"
        id="column-btn3"
        onClick={() => isTurnOn(2)}
      >
        카테고리
      </button>
      <button
        className="column-btn"
        id="column-btn4"
        onClick={() => isTurnOn(3)}
      >
        단어빈도
      </button>

      <div id="second-main-chart">
        {/* TODO 기간 선택시 p태그 내용이 바껴야함! */}
        <p>사회적 거리두기 1단계 구간</p>
        <p>2020년 1,2,3월, 2021년 3,4,5월</p>

        {information && <BasicInformationChart />}
        {time && <TimeInfomationChart />}
        {category && <CategoryInfomationChart />}
        {word && <WordCloud />}
      </div>
    </div>
  );
}

function BasicInformationChart() {
  return (
    <VictoryChart domainPadding={50}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["영상 수", " 조회수", "좋아요 수", "댓글 수"]}
      />
      <VictoryAxis
        dependentAxis
        offsetX={50}
        orientation="left"
        standalone={false}
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

function TimeInfomationChart() {
  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <>
      <VictoryChart domainPadding={30}>
        <VictoryAxis
          tickValues={times.map(x => x)}
          tickFormat={times.map(x => `${x}`)}
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

function CategoryInfomationChart() {
  const category = [
    { categoryId: 1, categoryName: "v-log" },
    { categoryId: 2, categoryName: "cook" },
    { categoryId: 3, categoryName: "drama" },
    { categoryId: 4, categoryName: "review" },
  ];

  return (
    <>
      <VictoryChart>
        <VictoryChart domainPadding={30}>
          <VictoryAxis
            tickValues={category.map(x => x["categoryId"])}
            tickFormat={category.map(x => x["categoryId"])}
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
      </VictoryChart>
    </>
  );
}

function WordCloud() {
  const data = [
    { name: "죄송", value: 15 },
    { name: "우와", value: 25 },
    { name: "나비", value: 35 },
    { name: "토끼", value: 5 },
    { name: "체크", value: 55 },
    { name: "확인", value: 65 },
    { name: "물병", value: 7 },
    { name: "아이폰", value: 10 },
    { name: "시계", value: 100 },

    { name: "휴지", value: 32 },
    { name: "아이패드", value: 22 },
    { name: "아이패드", value: 22 },
    { name: "맥북", value: 12 },

    { name: "보드마카", value: 5 },

    { name: "트럼프", value: 80 },
  ];

  const datas = data.map(item => {
    return <div style={{ fontSize: item.value }}>{item.name}</div>;
  });
  console.log(data.map(i => `${i.value > 100 ? 80 : i.value}px`));

  return (
    <TagCloud
      className="tag-cloud"
      style={{
        fontFamily: "sans-serif",
        // fontSize: () => Math.round(Math.random() * 50) + 16,
        fontWeight: "bold",
        fontStyle: "italic",
        color: () => randomColor({ hue: "red" }),
        padding: 5,
        width: "100%",
        height: "100%",
        padding: 5,
      }}
    >
      {datas}
    </TagCloud>
  );
}

export default SecondPage;
