import React, { useState, useEffect } from 'react';
import VideoItem from './VideoItem';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')  // API endpoint for videos
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;

