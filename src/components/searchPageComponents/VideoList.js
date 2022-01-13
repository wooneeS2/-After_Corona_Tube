import React from "react";
import { LoadingCircle } from "../etc/loadingCircle";
import VideoItem from "./VideoItem";

const VideoList = ({ item }) => {
  if (item === null) {
    return <LoadingCircle />;
  }
  return item.map((x, index) => {
    return <VideoItem video={x} key={x + index} />;
  });
};

export default VideoList;
