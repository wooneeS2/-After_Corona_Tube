import React from "react";
import { useState, useEffect } from "react";
import "../design/searchPage.css";
import { GrLike, GrView } from "react-icons/gr";
import axios from "axios";
import { GrNext, GrPrevious, GrRefresh } from "react-icons/gr";

const activeStyle = {
  backgroundColor: "#e0d3d3",
  fontWeight: "bold",
  border: "solid 3px #ac8888",
  boxShadow:
    "rgba(204, 185, 185, 0.15) 0px 50px 100px -20px, rgba(204, 185, 185, 0.3) 0px 30px 60px -30px, rgba(204, 185, 185, 0.35) 0px -2px 6px 0px inset",
};

const categoryType = [
  {
    category_id: 0,
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
    category_id: 10,
    category_name: "음악",
  },
  {
    category_id: 15,
    category_name: "동물",
  },
  {
    category_id: 17,
    category_name: "스포츠",
  },
  {
    category_id: 19,
    category_name: "여행",
  },
  {
    category_id: 20,
    category_name: "게임",
  },
  {
    category_id: 22,
    category_name: "일상",
  },
  {
    category_id: 23,
    category_name: "코미디",
  },
  {
    category_id: 24,
    category_name: "엔터테인먼트",
  },
  {
    category_id: 25,
    category_name: "뉴스",
  },
  {
    category_id: 26,
    category_name: "노하우",
  },
  {
    category_id: 27,
    category_name: "교육",
  },
  {
    category_id: 28,
    category_name: "과학&기술",
  },
  {
    category_id: 29,
    category_name: "사회&이슈",
  },
];
// 전체

const DEFAULT_CATEGORY = 0;

export function SearchPage() {
  const [selectTags, setSelectTags] = useState([]);
  const [selectCategory, setSelectCategory] = useState(DEFAULT_CATEGORY);
  const [maxPage, setMaxPage] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState(null);
  const url = `http://elice-kdt-3rd-team-16.koreacentral.cloudapp.azure.com/`;

  const [searchTags, setSearchTags] = useState([]);
  const handleCategory = categoryId => {
    setSelectCategory(categoryId);
  };
  const fetchTags = async categoryId => {
    const params = `search/?category=${categoryId}`;
    const response = await axios.get(url + params);
    setSearchTags(response.data);
  };

  const handleTags = tagName => {
    const tagIndex = selectTags.indexOf(tagName);
    tagIndex === -1
      ? setSelectTags([...selectTags, tagName])
      : setSelectTags(selectTags.filter(item => item !== tagName));
  };

  const handlePageByCategory = async () => {
    const params = `/search/category?data= {'categoryId':${selectCategory},'page':${currentPage}}`;
    const response = await axios.get(url + params);
    setVideos(response.data.videos);
    console.log(response.data);
    setMaxPage(response.data.max_page);
  };

  //태그가 선택되면 호출
  const handlePageByTags = async () => {
    const params = `http://elice-kdt-3rd-team-16.koreacentral.cloudapp.azure.com/search/tags?data={'tags':'${selectTags.join(
      ","
    )}','categoryId':${selectCategory},'page':${currentPage}}`;

    try {
      if (selectTags.length !== 0) {
        const response = await axios.get(params);
        setVideos(response.data.videos);
        console.log(response.data.videos);
        setMaxPage(response.data.max_page);
      } else {
        handlePageByCategory();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePagination = () => {
    const temp =
      maxPage < 10
        ? Array.from({ length: maxPage }, (v, i) => i + 1)
        : Array.from({ length: 10 }, (v, i) => i + 1);

    setPageArray(temp);
  };

  useEffect(() => {
    console.log("mount");

    handlePageByCategory();
    fetchTags(selectCategory);
  }, []);

  useEffect(() => {
    handlePageByTags();
  }, [selectTags]);

  useEffect(() => {
    fetchTags(selectCategory);
    handlePageByCategory();
    setSearchTags([]);
    setCurrentPage(1);
  }, [currentPage, selectCategory]);

  useEffect(() => {
    setCurrentPage(1);
    handlePagination();
  }, [maxPage]);

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
                  handleCategory(x.category_id);
                  fetchTags(x.category_id);
                }}
                style={
                  `category-box-button${selectCategory}` ===
                  `category-box-button${x.category_id}`
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
          {searchTags.length === 0 ? (
            <div class="spinner-border text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            searchTags.map(x => {
              return (
                <button
                  id="hashtag-btn"
                  style={selectTags.indexOf(x) !== -1 ? activeStyle : {}}
                  onClick={() => {
                    handleTags(x);
                  }}
                >
                  {x}
                </button>
              );
            })
          )}
          <span id="hastag-refresh-btn">
            <GrRefresh
              onClick={() => {
                setSelectTags([]);
              }}
            />
          </span>
        </div>
      </div>

      <div className="video-div">
        {videos === null ? (
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          videos.map(v => {
            return (
              <a
                href={`https://www.youtube.com/watch?v=${v.videoAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="video-wrapped-btn"
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
                    <p>
                      {
                        categoryType[
                          Object.keys(categoryType).findIndex(
                            key =>
                              categoryType[key].category_id === v.categoryId
                          )
                        ].category_name
                      }
                    </p>
                  </div>

                  <div className="video-views-likes">
                    <div className="video-likes-div">
                      <p id="video-views-p">
                        <GrLike />
                        {`${
                          v.likes > 1000000
                            ? (v.likes / 1000000).toFixed(1)
                            : (v.likes / 1000).toFixed(1)
                        }${v.likes > 1000000 ? "M" : "K"}`}
                      </p>
                    </div>
                    <div className="video-views-div">
                      <GrView />
                      <p id="video-likes-p">{`${
                        v.views > 1000000
                          ? (v.views / 1000000).toFixed(1)
                          : (v.views / 1000).toFixed(1)
                      }${v.views > 1000000 ? "M" : "K"}`}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
      <div className="bootstrap-pagination-bar">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                onClick={e => {
                  e.preventDefault();
                  console.log(pageArray);
                  const temp =
                    pageArray[0] === 1
                      ? pageArray.map(v => v)
                      : pageArray.map(v => v - 10);
                  setPageArray(temp);
                }}
              >
                <span aria-hidden="true">
                  <GrPrevious />
                </span>
              </a>
            </li>
            {pageArray.map((x, index) => {
              return (
                <li
                  class={`${
                    currentPage === x ? "page-item active" : "page-item"
                  }`}
                >
                  <a
                    class="page-link"
                    href="#"
                    onClick={e => {
                      e.preventDefault();

                      setCurrentPage(x);
                    }}
                  >
                    {x}
                  </a>
                </li>
              );
            })}

            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Next"
                onClick={e => {
                  e.preventDefault();

                  const temp =
                    pageArray[pageArray.length - 1] === maxPage
                      ? pageArray.map(v => v)
                      : pageArray.map(v => v + 10);
                  setPageArray(temp);
                }}
              >
                <span aria-hidden="true">
                  <GrNext />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SearchPage;
