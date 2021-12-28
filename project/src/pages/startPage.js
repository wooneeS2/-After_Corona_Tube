import React from "react";
import { Link } from "react-router-dom";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

function NextBtn() {
  return (
    <>
      <Link to="/second">다음</Link>
    </>
  );
}

export function StartPage() {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>
              <p>
                인기 동영상에는 어떤 영상들이 올라갈까?
                <br /> 궁금하신적 있으신가요?
              </p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>
              <p>
                코로나 19 이후 유튜브 트렌드 변화에 대해 <br /> 궁금하지
                않으신가요?
              </p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveOut(-1000, 0)}>
                그렇다면 잘 오셨어요 👋🏻
              </Animator>
              <Animator animation={MoveOut(1000, 0)}>
                저희는 팀 식스틴입니다. 🙋🏻‍♀️
              </Animator>

              <Animator animation={MoveIn(-1000, 0)}>
                내려서 설명 더보기 ⬇️
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}>
              <p>
                저희 000은 2020년도 08월부터 21년도 11월까지 Youtube의
                인기동영상을 분석하여 어쩌구저쩌구 Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ipsa deserunt rem, incidunt
                expedita iusto excepturi officia, sed fugiat quas, magni
                voluptate odio natus nulla. Nesciunt nulla reiciendis facilis et
                sint.
              </p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}>
              <p>
                차트 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam totam voluptatibus cupiditate deleniti recusandae unde,
                obcaecati modi magnam error molestias placeat. Veritatis magni
                impedit fugit id maxime dolores voluptas vitae.
              </p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
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
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation,
              ZoomAnimation
            </span>
            <NextBtn />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default StartPage;
