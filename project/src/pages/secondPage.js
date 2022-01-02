import React from "react";

import { useState, useEffect } from "react";
import { BasicInformationChart } from "../components/secondPageChartComponents/basicInformationChart";
import { TimeInfomationChart } from "../components/secondPageChartComponents/timeInfomationChart";
import { CategoryInfomationChart } from "../components/secondPageChartComponents/categoryInfomationChart";
import { WordCloud } from "../components/secondPageChartComponents/wordCloudChart";

import {
  categoryStep1,
  categoryStep2,
  categoryStep3,
  categoryStep4,
} from "../data/data2-3";

import {
  basicInfoData1,
  basicInfoData2,
  basicInfoData3,
  basicInfoData4,
} from "../data/data2-1";
import {
  wordCloudData1,
  wordCloudData2,
  wordCloudData3,
  wordCloudData4,
} from "../data/data2-4";

import { periodStep, titleStep } from "../data/periodStep";
import "../design/secondPage.css";
import "../design/wordcloud.css";

const DEFAULT_TAP = "column-btn1";
const DEFAULT_STEP = "row-btn1";

const categoryDataByStep = [
  categoryStep1,
  categoryStep2,
  categoryStep3,
  categoryStep4,
];

const basicDataByStep = [
  basicInfoData1,
  basicInfoData2,
  basicInfoData3,
  basicInfoData4,
];

const wordcloudDataByStep = [
  wordCloudData1,
  wordCloudData2,
  wordCloudData3,
  wordCloudData4,
];

const activeStepStyle = {
  backgroundColor: "#e0d3d3",
  fontWeight: "bold",
  border: "solid 3px #ac8888",
  boxShadow:
    "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset",
};

const activeTapStyle = {
  backgroundColor: "#e0d3d3",
  fontWeight: "bold",
  border: "solid 3px #ac8888",
  boxShadow:
    "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset",
};

export function SecondPage() {
  const [tap, setTap] = useState(DEFAULT_TAP);
  // const [prevTap, setPrevTap] = useState(null);
  const [step, setStep] = useState(DEFAULT_STEP);
  // const [prevStep, setPrevStep] = useState(null);

  const selectTabType = (btnId) => {
    setTap(btnId);
  };

  const selectStep = (btnId) => {
    setStep(btnId);
  };

  const selectStepData = (data) => {
    let dataset =
      (step === "row-btn1" && data[0]) ||
      (step === "row-btn2" && data[1]) ||
      (step === "row-btn3" && data[2]) ||
      (step === "row-btn4" && data[3]);
    return dataset;
  };

  // @@ useEffect는 추후 사이드 이팩트가 많이 나기 때문에 최대한 적게 사용하는 것이 좋습니다 ^^
  // 그리고 실제 DOM에 접근하는 로직 getElementById 등도 최대적 적게 사용하는 것이 부작용을 줄이는 방법이에요 :)
  // - 민성

  //TODO style 함수로 합치기
  //카테고리 버튼 누르기 전/후 스타일
  // useEffect(
  //   e => {
  //     if (tap !== null) {
  //       let current = document.getElementById(tap);

  //       current.style.backgroundColor = "#e0d3d3";
  //       current.style.fontWeight = "bold";
  //       current.style.border = "solid 3px #ac8888";

  //       current.style.boxShadow =
  //         "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset";
  //     }

  //     if (prevTap !== null) {
  //       let prev = document.getElementById(prevTap);

  //       prev.style.fontWeight = "normal";
  //       prev.style.border = "none";
  //       prev.style.backgroundColor = "#f1eded";
  //       prev.style.boxShadow = "white 0 0 0";
  //     }
  //     setPrevTap(tap);
  //   },
  //   [tap]
  // );

  // //기간 버튼 누르기 전/후 스타일
  // useEffect(
  //   e => {
  //     if (step !== null) {
  //       let current = document.getElementById(step);

  //       current.style.backgroundColor = "#e0d3d3";
  //       current.style.fontWeight = "bold";
  //       current.style.border = "solid 3px #ac8888";
  //       current.style.boxShadow =
  //         "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset";
  //     }

  //   },
  //   [step]
  // );

  return (
    <div className="second-chart">
      <button
        className="row-btn"
        id="row-btn1"
        style={step === "row-btn1" ? activeStepStyle : {}}
        // @@ 속성에 'row-btn1' 값이 두 번이 나오게 되었어요! 이걸 하나로 줄여서
        // DRY principle을 적용하는 방법이 무엇이 있을까요? ^^ - 민성
        onClick={(e) => {
          selectStep(e.target.id);
        }}
      >
        기간1
      </button>
      <button
        className="row-btn"
        id="row-btn2"
        style={step === "row-btn2" ? activeStepStyle : {}}
        onClick={(e) => {
          selectStep(e.target.id);
        }}
      >
        기간2
      </button>
      <button
        className="row-btn"
        id="row-btn3"
        style={step === "row-btn3" ? activeStepStyle : {}}
        onClick={(e) => {
          selectStep(e.target.id);
        }}
      >
        기간3
      </button>
      <button
        className="row-btn"
        id="row-btn4"
        style={step === "row-btn4" ? activeStepStyle : {}}
        onClick={(e) => {
          selectStep(e.target.id);
        }}
      >
        기간4
      </button>

      <button
        className="column-btn"
        id="column-btn1"
        style={tap === "column-btn1" ? activeTapStyle : {}}
        onClick={(e) => {
          selectTabType(e.target.id);
        }}
      >
        기본정보
      </button>
      <button
        className="column-btn"
        id="column-btn2"
        style={tap === "column-btn2" ? activeTapStyle : {}}
        onClick={(e) => {
          selectTabType(e.target.id);
        }}
      >
        시간
      </button>
      <button
        className="column-btn"
        id="column-btn3"
        style={tap === "column-btn3" ? activeTapStyle : {}}
        onClick={(e) => {
          selectTabType(e.target.id);
        }}
      >
        카테고리
      </button>
      <button
        className="column-btn"
        id="column-btn4"
        style={tap === "column-btn4" ? activeTapStyle : {}}
        onClick={(e) => {
          selectTabType(e.target.id);
        }}
      >
        단어빈도
      </button>

      <div id="second-main-chart">
        {/* 기간별 타이틀 및 세부 날짜 */}
        <p id="second-subtitle-1">{selectStepData(titleStep)}</p>
        <p id="second-subtitle-2">{selectStepData(periodStep)}</p>

        {/* 클릭된 버튼의 id가 id와 같으면 해당 차트 표시 */}
        {tap === "column-btn1" && (
          <BasicInformationChart datas={selectStepData(basicDataByStep)} />
        )}
        {tap === "column-btn2" && <TimeInfomationChart />}
        {tap === "column-btn3" && (
          <CategoryInfomationChart datas={selectStepData(categoryDataByStep)} />
        )}

        {tap === "column-btn4" && (
          <WordCloud data={selectStepData(wordcloudDataByStep)} />
        )}
      </div>
    </div>
  );
}

export default SecondPage;
