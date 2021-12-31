import React from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";
import { useState, useEffect } from "react";

export function WordCloud() {
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
  //TODO maxWidth 설정하기
  //TODO hover시 가중치 툴팁 만들기
  const datas = data.map(item => {
    return <div style={{ fontSize: item.value }}>{item.name}</div>;
  });

  function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
  }
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    // setInterval -> 일정한 시간 간격으로 작업을 수행하기 위해 사용하는 함수
    // clearInterval을 이용해서 멈춤(지정된 작업은 모두 실행되고 멈춤)
    const interval = setInterval(() => {
      forceUpdate();
    }, 2000);
    //useEffect에서 return은 컴포넌트가 언마운트 될 때 실행되는 명령
    return () => clearInterval(interval);
  }, []);

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
