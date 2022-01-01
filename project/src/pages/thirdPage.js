import React from "react";
import "../design/thirdPage.css";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export function ThirdPage() {
  return (
    <div>
      <div>
        <h2 id="hashtag-title">#해시태그로 인기 동영상 보기</h2>
      </div>

      <div className="thirdpage-main" style={{}}>
        <div className="hashtag-box">
          <div className="hastag-box-subtitle">
            <p>#추천해시태그</p>
            <button>{<CgArrowsExpandRight />}</button>
          </div>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfd</button>
          <button id="hashtag-btn">dfd</button>
          <button id="hashtag-btn">dfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfgfd</button>
          <button id="hashtag-btn">dfdasfadsfdas</button>
          <button id="hashtag-btn">dfdasfadsfdas</button>
          <button id="hashtag-btn">dfdasfadsfdas</button>
          <button id="hashtag-btn">dfdasfadsfdas</button>
          <button id="hashtag-btn">dasfdasf</button>
          <button id="hashtag-btn">as</button>
          <button id="hashtag-btn">fddfdf</button>
        </div>

        <div id="video1">
          <p>video title</p>
          <p>channel</p>
          <p>channel</p>
          <p>channel</p>
        </div>

        <div id="video2">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video3">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video4">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video5">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video6">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video7">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video8">
          <p>video title</p>
          <p>channel</p>
        </div>
        <div id="video9">
          <p>video title</p>
          <p>channel</p>
        </div>

        <button id="video-next-btn">{<BsCaretRightFill />}</button>
        <button id="video-prev-btn">{<BsCaretLeftFill />}</button>
      </div>
    </div>
  );
}

export default ThirdPage;
