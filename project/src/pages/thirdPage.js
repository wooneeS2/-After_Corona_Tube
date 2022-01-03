import React from "react";
import { useState, useEffect, useMemo } from "react";
import "../design/thirdPage.css";
import { CgArrowsExpandRight } from "react-icons/cg";
import { GrLike, GrView } from "react-icons/gr";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

//thirdpage 브랜치에서 작업중

const videosInfo = [
  {
    title: "SO BAD",
    channel: "STAYC",
    thumbnail: "https://i.ytimg.com/vi/rFwZqtPc-Ss/default.jpg",
    videoAddress: "5TipHbcZofo",
    categoryId: 2,
    likes: 100000,
    views: 1000000,
  },
  {
    title: "ASAP",
    channel: "STAYC",
    thumbnail: "https://i.ytimg.com/vi/JVqe_O7ifcI/default.jpg",
    videoAddress: "cnnmBXORPxE",
    categoryId: 2,
    likes: 500000,
    views: 1000000,
  },
  {
    title: "STEREO TYPE",
    channel: "STAYC",
    thumbnail: "https://i.ytimg.com/vi/geZXCYNRvy4/default.jpg",
    videoAddress: "WemIClZUHWQ",
    categoryId: 2,
    likes: 400000,
    views: 1000000,
  },
  // {
  //   title: "ELEVEN",
  //   channel: "IVE",
  //   thumbnail: "https://i.ytimg.com/vi/PtNGUFGkj98/default.jpg",
  //   videoAddress: "Hjy-LuGGxh0",
  //   categoryId: 2,
  //   likes: 4000,
  //   views: 1000000,
  // },
  // {
  //   title: "죄송합니다.",
  //   channel: "BJ설빙❤️",
  //   thumbnail: "https://i.ytimg.com/vi/q4lyRLzFCbE/default.jpg",
  //   videoAddress: "3zOS3g4lTtQ",
  //   categoryId: 3,
  //   likes: 6000,
  //   views: 1000000,
  // },
  {
    title: "오늘은 니뽕내뽕먹고 초코설빙 조지기",
    channel: "오늘도먹지",
    thumbnail: "https://i.ytimg.com/vi/xPxrAHrQcmM/default.jpg",
    videoAddress: "q4lyRLzFCbE",
    categoryId: 3,
    likes: 70000,
    views: 2000000,
  },
  {
    title: "와 이거 실화냐 ㄷㄷ; 새벽에 케이크 먹으면 살찌는 이유",
    channel: "이거실화탐사대",
    thumbnail: "https://i.ytimg.com/vi/24uGJMhUzSA/default.jpg",
    videoAddress: "rFwZqtPc-Ss",
    categoryId: 4,
    likes: 100000,
    views: 3000000,
  },
  // {
  //   title: "[211230] ISAAC 9시 뉴스입니다.",
  //   channel: "ISAAC",
  //   thumbnail: "https://i.ytimg.com/vi/bvfNyLxQNPw/default.jpg",
  //   videoAddress: "JVqe_O7ifcI",
  //   categoryId: 7,
  //   likes: 10000,
  //   views: 2000000,
  // },
  {
    title: "토니스타크가 죽자 일어난 일 [스파이더맨 노웨이홈] 리뷰",
    channel: "리얼솔직영화리뷰",
    thumbnail: "https://i.ytimg.com/vi/bbMRX7iPmBE/default.jpg",
    videoAddress: "oDE21Dg7kV4",
    categoryId: 10,
    likes: 100000,
    views: 3000000,
  },
];

const searchTags = [
  { tagName: "apple" },
  { tagName: "banana" },
  { tagName: "amond" },
  { tagName: "monkey" },
  { tagName: "butter" },
  { tagName: "blueberry" },
  { tagName: "orange" },
  { tagName: "melon" },
  { tagName: "potato" },
  { tagName: "grape" },
  { tagName: "iphone" },
];
const activeStyle = {
  backgroundColor: "#e0d3d3",
  fontWeight: "bold",
  border: "solid 3px #ac8888",
  boxShadow:
    "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset",
};

export function ThirdPage() {
  const [selectTags, setSelectTags] = useState([]);

  const handleTags = tagName => {
    const tagIndex = selectTags.indexOf(tagName);
    tagIndex === -1
      ? setSelectTags([...selectTags, tagName])
      : setSelectTags(selectTags.filter(item => item !== tagName));

    console.log("tagName", tagName, "selecttags", selectTags);
  };

  useEffect(() => {
    console.log(selectTags);
  }, [selectTags]);

  return (
    <div>
      <div>
        <h2 id="hashtag-title">#해시태그로 인기 동영상 보기</h2>
      </div>

      <div className="thirdpage-main">
        <div className="hashtag-box">
          <div className="hastag-box-subtitle">
            <p>#추천해시태그</p>
            {/* <button>{<CgArrowsExpandRight />}</button> */}
          </div>
          {searchTags.map(x => {
            return (
              <button
                id="hashtag-btn"
                style={selectTags.indexOf(x.tagName) !== -1 ? activeStyle : {}}
                onClick={() => {
                  handleTags(x.tagName);
                }}
              >
                {x.tagName}
              </button>
            );
          })}
        </div>

        {videosInfo.map((v, index) => {
          return (
            <div id={`video${index + 1}`}>
              <img src={v.thumbnail} alt={v.videoAddress} />
              <p id="video-title">{v.title}</p>
              <div className="video-channel-category">
                <p id="video-channel">{v.channel}</p>
                <p id="video-category">{v.categoryId}</p>
              </div>
              <div className="video-views-likes">
                <div className="video-likes-div">
                  <p id="video-views-p">
                    <GrLike />
                    {`${
                      v.likes > 1000000 ? v.likes / 1000000 : v.likes / 1000
                    }${v.likes > 1000000 ? "M" : "K"}`}
                  </p>
                </div>
                <div className="video-views-div">
                  <GrView />
                  <p id="video-likes-p">{`${
                    v.views > 1000000 ? v.views / 1000000 : v.views / 1000
                  }${v.views > 1000000 ? "M" : "K"}`}</p>
                </div>
              </div>
            </div>
          );
        })}

        <button id="video-next-btn">{<BsCaretRightFill />}</button>
        <button id="video-prev-btn">{<BsCaretLeftFill />}</button>
      </div>
    </div>
  );
}

export default ThirdPage;
