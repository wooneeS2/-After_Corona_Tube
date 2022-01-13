import React from "react";

const HashtagList = ({ onClick, onStyle, tags }) => {
  return (
    <button id="hashtag-btn" style={onStyle} onClick={onClick}>
      #{tags}
    </button>
  );
};

export default HashtagList;
