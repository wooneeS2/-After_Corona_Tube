import React from "react";
import { divisionNumbers } from "../etc/divisionLargeNumbers";
import { categoryType } from "../../data/categoryType";
import { GrLike, GrView } from "react-icons/gr";

 const VideoItem = ({ video }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoAddress}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-wrapped-btn"
    >
      <div id="video-div-div">
        <div id="video-thumbnail">
          <img src={video.thumbnail} alt={video.videoAddress} />
        </div>
        <div id="video-title">
          <p>{video.title}</p>
        </div>

        <div id="video-channel">
          <p>{video.channel}</p>
        </div>

        <div id="video-category">
          <p>
            {
              categoryType[
                Object.keys(categoryType).findIndex(
                  key => categoryType[key].category_id === video.categoryId
                )
              ].category_name
            }
          </p>
        </div>

        <div className="video-views-likes">
          <div className="video-likes-div">
            <p id="video-views-p">
              <GrLike />
              {divisionNumbers(video.likes, 1)}
            </p>
          </div>
          <div className="video-views-div">
            <GrView />
            <p id="video-likes-p">{divisionNumbers(video.views, 1)}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoItem;
