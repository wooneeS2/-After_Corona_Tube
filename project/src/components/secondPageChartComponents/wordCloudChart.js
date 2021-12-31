import React from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";
import { useState, useEffect } from "react";

export function WordCloud({ data }) {
  //TODO maxWidth 설정하기
  //TODO hover시 가중치 툴팁 만들기
  const datas = data.map(item => {
    return (
      <div
        style={{
          fontSize: item.value > 200 ? item.value / 4 : item.value / 2,
        }}
      >
        {item.word}
      </div>
    );
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
