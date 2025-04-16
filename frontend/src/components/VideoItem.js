import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <h3>{video.title}</h3>
      <a href={video.url}>Watch Now</a>
    </div>
  );
};

export default VideoItem;

