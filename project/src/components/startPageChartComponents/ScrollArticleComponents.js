import { MediaTrendChart } from "./MediaTrendChart";
import { PatientAndViewsChart } from "./PatientAndViewsChart";
import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
  FadeIn,
} from "react-scroll-motion";
import { ScrollGuideBtn, NextBtn } from "../buttonComponents";
import FooterComponents from "../base/Footer";

//Page1~7순서대로 /home에서 스크롤됨
export function Page1() {
  return (
    <>
      <ScrollPage page={0}>
        <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>
            <p>
              인기 동영상에는 어떤 영상들이 올라가는지
              <br /> 궁금하신적 있으신가요?
            </p>
            {/* FIXME 두개를 연속해서쓰면 두번째 타겟만 적용됨 ㅠㅠ
          .... */}
            <ScrollGuideBtn target="page2" offset={450} />
          </span>
        </Animator>
      </ScrollPage>
    </>
  );
}
export function Page2() {
  return (
    <>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(0, 1), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }} id="page2">
            <p>
              코로나 19 이후 유튜브 트렌드 변화에 대해 <br /> 궁금하지
              않으신가요?
            </p>
            <ScrollGuideBtn target="page3" offset={-300} />
          </span>
        </Animator>
      </ScrollPage>
    </>
  );
}
export function Page3() {
  return (
    <ScrollPage page={2}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          height: "100%",
        }}
        id="page3"
      >
        <span style={{ fontSize: "40px" }}>
          <Animator animation={MoveOut(-1000, 0)}>
            <p>그렇다면 잘 오셨어요 👋🏻</p>
          </Animator>
          <Animator animation={MoveOut(1000, 500)}>
            <p>유튜브와 코로나19가 🦠</p>
          </Animator>

          <Animator animation={MoveOut(-1000, 1000)}>
            <p>어떤 관련이 있을까요 ? ❓</p>
          </Animator>
          <ScrollGuideBtn target="page4" offset={400} />
        </span>
      </div>
    </ScrollPage>
  );
}
export function Page4() {
  return (
    <ScrollPage page={3}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <span id="page4">
          <p>
            저희 000은 2020년도 08월부터 21년도 11월까지 Youtube의 인기동영상을
            분석하여 어쩌구저쩌구 Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsa deserunt rem, incidunt expedita iusto
            excepturi officia, sed fugiat quas, magni voluptate odio natus
            nulla. Nesciunt nulla reiciendis facilis et sint.
          </p>
          <ScrollGuideBtn target="page5" offset={800} />
        </span>
      </Animator>
    </ScrollPage>
  );
}
export function Page5() {
  return (
    <ScrollPage page={4}>
      <Animator animation={batch(Fade(), Sticky(50, 50), MoveOut(0, -200))}>
        <span id="page5" className="chart1">
          <h2 id="chart-title">
            유튜브 인기동영상 조회수 · TV 시청률 · 영화 관람객 수 <br />
            추이 비교 및 분석
          </h2>

          <div id="chart">
            <MediaTrendChart />
          </div>
          <p id="chart-description">
            실제로 우리는 코로나19 이후 많은 변화를 경험하고 있는데요. 그
            중에서도 가장 눈에 띄는 것은 언택트, 즉 비대면 사회로의 전환입니다.
            과학 기술의 힘을 통해 빠르게 퍼져나가고 있는 비대면 문화 우리는 이
            속에서 얼마나 많은 일상의 변화를 경험하게 될까요? 코로나19가
            바꿔놓은 우리의 일상을 통해 &nbsp;&nbsp;그 답을 찾아보도록
            하겠습니다.
          </p>
        </span>
      </Animator>
    </ScrollPage>
  );
}

export function Page6() {
  return (
    <ScrollPage page={5}>
      <Animator animation={batch(Fade(0, 1), Sticky(), MoveOut(0, -200))}>
        <span className="chart2">
          <h2 id="chart-title">확진자 수 증가 그래프</h2>
          <div id="chart">
            <PatientAndViewsChart />
          </div>
          <p id="chart-description">
            실제로 우리는 코로나19 이후 많은 변화를 경험하고 있는데요. 그
            중에서도 가장 눈에 띄는 것은 언택트, 즉 비대면 사회로의 전환입니다.
            과학 기술의 힘을 통해 빠르게 퍼져나가고 있는 비대면 문화 우리는 이
            속에서 얼마나 많은 일상의 변화를 경험하게 될까요? 코로나19가
            바꿔놓은 우리의 일상을 통해 &nbsp;&nbsp;그 답을 찾아보도록
            하겠습니다.
          </p>
        </span>
      </Animator>
    </ScrollPage>
  );
}

export function Page7() {
  return (
    <>
      <ScrollPage page={6}>
        <Animator animation={batch(Sticky(), FadeIn())}>
          <div>
            <p id="last-description">
              코로나19 이후 유튜브 트렌드가 궁금하다면?
            </p>
            <div id="last-btn">
              {/* TODO 가운데정렬 마진 없이 맞추기 */}
              <NextBtn
                title={"코로나 이후 기간별 데이터 보러가기 "}
                path={"/chart"}
              />
              <NextBtn
                title={"해시태그별 인기 동영상 검색하기 "}
                path={"/search"}
              />
            </div>
          </div>
        </Animator>
        <FooterComponents />
      </ScrollPage>
    </>
  );
}

export default Page1;
