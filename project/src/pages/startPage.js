import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as ScrollLink, Element } from "react-scroll";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
  FadeIn,
} from "react-scroll-motion";
import "./../design/startPage.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
} from "victory";

function Chart1() {
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
        {/* <VictoryAxis
          dependentAxis
          tickValues={[1000, 3000, 5000, 7000]}
          tickFormat={x => x}
          orientation="left"
        /> */}
        <VictoryAxis
          dependentAxis
          offsetX={50}
          orientation="left"
          standalone={false}
        />
        {/* 조회수 */}
        {/* <VictoryAxis
          dependentAxis
          // tickValues={[40000, 2000, 300, 100000]}
          tickFormat={x => `${x / 1000}k`}
          orientation="right"
        /> */}
        <VictoryAxis
          dependentAxis
          domain={[0, 50]}
          orientation="right"
          standalone={false}
        />
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
          style={{ data: { stroke: "purple", strokeWidth: 3 } }}
        />
      </VictoryChart>
    </>
  );
}

const NextGuide = styled.p`
  // @keyframes blink-effect {
  //   50% {
  //     color: pink;
  //   }
  // }

  font-size: 0.75rem;
  text-align: center;
  margin-top: 2rem;

  // animation: blink-effect 1.5s step-end infinite;
`;

function NextBtn({ title, path }) {
  return (
    <div>
      <Link to={path} className="next">
        <button id="next-btn">{title}</button>
      </Link>
    </div>
  );
}

function ScrollGuide({ target, offset }) {
  return (
    <ScrollLink
      activeClass="active"
      to={target}
      smooth={true}
      offset={offset}
      isDynamic={false}
      spy={true}
      hashSpy={true}
      duration={3000}
      spyThrottle={500}
    >
      <NextGuide>스크롤 내려서 더보기 ⤵︎⤵︎</NextGuide>
    </ScrollLink>
  );
}

//TODO 스크롤 페이지별 폰트, 레이아웃 정리 필요
//TODO 반응형으로 만들기

export function StartPage() {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>
              <p>
                인기 동영상에는 어떤 영상들이 올라가는지
                <br /> 궁금하신적 있으신가요?
              </p>
              {/* FIXME 두개를 연속해서쓰면 두번째 타겟만 적용됨 ㅠㅠ */}
              <ScrollGuide target={"page1"} offset={450} />
            </span>
          </Animator>
        </ScrollPage>
        <Element name="page">
          <ScrollPage page={1}>
            <Animator animation={batch(Fade(0, 1), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: "30px" }} id="page1">
                <p>
                  코로나 19 이후 유튜브 트렌드 변화에 대해 <br /> 궁금하지
                  않으신가요?
                </p>
                <ScrollGuide target="page2" offset={-300} />
              </span>
            </Animator>
          </ScrollPage>
        </Element>
        <Element name="page2">
          <ScrollPage page={2}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",

                height: "100%",
              }}
              id="page2"
            >
              <span style={{ fontSize: "40px" }}>
                <Animator animation={MoveOut(-1000, 0)}>
                  그렇다면 잘 오셨어요 👋🏻
                </Animator>
                <Animator animation={MoveOut(1000, 0)}>
                  유튜브와 코로나19가 🦠
                </Animator>

                <Animator animation={MoveIn(-1000, 0)}>
                  어떤 관련이 있을까요 ? ❓
                </Animator>
                <ScrollGuide target="page3" offset={0} />
              </span>
            </div>
          </ScrollPage>
        </Element>
        <Element name="page3">
          <ScrollPage page={3}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: "40px" }} id="page3">
                <p>
                  저희 000은 2020년도 08월부터 21년도 11월까지 Youtube의
                  인기동영상을 분석하여 어쩌구저쩌구 Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Ipsa deserunt rem, incidunt
                  expedita iusto excepturi officia, sed fugiat quas, magni
                  voluptate odio natus nulla. Nesciunt nulla reiciendis facilis
                  et sint.
                </p>
              </span>
            </Animator>
          </ScrollPage>
        </Element>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky(50, 50), MoveOut(0, -200))}>
            <span className="chart1">
              <h2>사회적 거리두기 기간별 유튜브 조회수 추이</h2>
              <div id="chart1">
                <Chart1 />
              </div>
              <p>
                실제로 우리는 코로나19 이후 많은 변화를 경험하고 있는데요. 그
                중에서도 가장 눈에 띄는 것은 언택트, 즉 비대면 사회로의
                전환입니다. 과학 기술의 힘을 통해 빠르게 퍼져나가고 있는 비대면
                문화 우리는 이 속에서 얼마나 많은 일상의 변화를 경험하게 될까요?
                코로나19가 바꿔놓은 우리의 일상을 통해 &nbsp;&nbsp;그 답을
                찾아보도록 하겠습니다.
              </p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={batch(Fade(0, 1), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}>
              <p>
                차트2 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda tempore, explicabo veritatis ratione id obcaecati
                laudantium incidunt animi soluta quos earum minima, ducimus fuga
                alias, illum officiis a sunt laboriosam.
              </p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator animation={batch(Sticky(), FadeIn())}>
            <div>
              <p>코로나19 이후 유튜브 트렌드가 궁금하다면?</p>
              {<FaArrowDown />}
              {<FaArrowDown />}
              <NextBtn
                title={"코로나 이후 기간별 데이터 보러가기"}
                path={"/second"}
              />
              <NextBtn
                title={"해시태그별 인기 동영상 검색하기"}
                path={"third"}
              />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default StartPage;
