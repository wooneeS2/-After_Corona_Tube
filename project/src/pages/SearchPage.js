import React from "react";
import { useState, useEffect } from "react";
import "../design/searchPage.css";
import { GrLike, GrView } from "react-icons/gr";

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
  {
    title: "ELEVEN",
    channel: "IVE",
    thumbnail: "https://i.ytimg.com/vi/PtNGUFGkj98/default.jpg",
    videoAddress: "Hjy-LuGGxh0",
    categoryId: 2,
    likes: 4000,
    views: 1000000,
  },
  {
    title: "죄송합니다.",
    channel: "BJ설빙❤️",
    thumbnail: "https://i.ytimg.com/vi/q4lyRLzFCbE/default.jpg",
    videoAddress: "3zOS3g4lTtQ",
    categoryId: 3,
    likes: 6000,
    views: 1000000,
  },
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
  {
    title: "[211230] ISAAC 9시 뉴스입니다.",
    channel: "ISAAC",
    thumbnail: "https://i.ytimg.com/vi/bvfNyLxQNPw/default.jpg",
    videoAddress: "JVqe_O7ifcI",
    categoryId: 7,
    likes: 10000,
    views: 2000000,
  },
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
  { tagName: "#apple" },
  { tagName: "#banana" },
  { tagName: "#amond" },
  { tagName: "#monkey" },
  { tagName: "#butter" },
  { tagName: "#blueberry" },
  { tagName: "#orange" },
  { tagName: "#melon" },
  { tagName: "#potato" },
  { tagName: "#grape" },
  { tagName: "#iphone" },
];
const activeStyle = {
  backgroundColor: "#e0d3d3",
  fontWeight: "bold",
  border: "solid 3px #ac8888",
  boxShadow:
    "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset",
};

const categoryType = [
  {
    category_id: 30,
    category_name: "전체",
  },
  {
    category_id: 1,
    category_name: "영화&애니메이션",
  },
  {
    category_id: 2,
    category_name: "자동차",
  },
  {
    category_id: 3,
    category_name: "음악",
  },
  {
    category_id: 4,
    category_name: "동물",
  },
  {
    category_id: 5,
    category_name: "스포츠",
  },
  {
    category_id: 6,
    category_name: "여행",
  },
  {
    category_id: 7,
    category_name: "게임",
  },
  {
    category_id: 8,
    category_name: "일상",
  },
  {
    category_id: 9,
    category_name: "코미디",
  },
  {
    category_id: 10,
    category_name: "엔터테인먼트",
  },
  {
    category_id: 11,
    category_name: "뉴스",
  },
  {
    category_id: 12,
    category_name: "노하우",
  },
  {
    category_id: 13,
    category_name: "교육",
  },
  {
    category_id: 14,
    category_name: "과학&기술",
  },
  {
    category_id: 15,
    category_name: "사회&이슈",
  },
];
// 전체
const DEFAULT_CATEGORY = "category-box-button30";

export function SearchPage() {
  const [selectTags, setSelectTags] = useState([]);
  const [selectCategory, setSelectCategory] = useState(DEFAULT_CATEGORY);

  const handleCategory = categoryId => {
    setSelectCategory(categoryId);
  };

  const handleTags = tagName => {
    const tagIndex = selectTags.indexOf(tagName);
    tagIndex === -1
      ? setSelectTags([...selectTags, tagName])
      : setSelectTags(selectTags.filter(item => item !== tagName));
  };

  useEffect(() => {
    console.log("");
  }, [selectTags]);

  return (
    <div>
      <div>
        <h2 id="hashtag-title">#해시태그로 인기 동영상 보기</h2>
      </div>

      <div className="thirdpage-main">
        <div className="category-box">
          {categoryType.map(x => {
            return (
              <button
                className="category-box-button"
                id={`category-box-button${x.category_id}`}
                onClick={e => {
                  handleCategory(e.target.id);
                }}
                style={
                  selectCategory === `category-box-button${x.category_id}`
                    ? activeStyle
                    : {}
                }
              >
                {x.category_name}
              </button>
            );
          })}
        </div>
        <div className="hashtag-box">
          <div className="hastag-box-subtitle"></div>

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
      </div>

      <div className="video-div">
        {videosInfo.map(v => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${v.videoAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="video-div-div">
                <div id="video-thumbnail">
                  <img src={v.thumbnail} alt={v.videoAddress} />
                </div>
                <div id="video-title">
                  <p>{v.title}</p>
                </div>

                <div id="video-channel">
                  <p>{v.channel}</p>
                </div>

                <div id="video-category">
                  <p>{v.categoryId}</p>
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
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
