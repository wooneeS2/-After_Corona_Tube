import React from "react";
import { ScrollContainer } from "react-scroll-motion";
import "./../design/startPage.css";
import * as page from "../components/startPageChartComponents/scrollArticleComponents";

//TODO 스크롤 페이지별 폰트, 레이아웃 정리 필요
//TODO 반응형으로 만들기

export function StartPage() {
  return (
    <div>
      <ScrollContainer>
        <page.Page1 />
        <page.Page2 />
        <page.Page3 />
        <page.Page4 />
        <page.Page5 />
        <page.Page6 />
        <page.Page7 />
      </ScrollContainer>
    </div>
  );
}

export default StartPage;
