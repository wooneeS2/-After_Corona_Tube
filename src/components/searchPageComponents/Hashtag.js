import React from "react";
import { LoadingCircle } from "../etc/loadingCircle";
import HashtagList from "./HashtagList";

const HashTag = ({ item, onClick, onStyle }) => {
  if (item.length === 0) {
    return <LoadingCircle />;
  }
  return item.map(x => {
    return <HashtagList onClick={onClick} onStyle={onStyle} tags={x} />;
  });
};

export default HashTag;
