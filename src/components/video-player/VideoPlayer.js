import { useEffect, useState } from "react";
import { Option } from "./Option";
import { Video } from "./Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
export default function Videoplayer() {
  const [selectedVideo, setSelectedVideo] = useState("deer");
  const [videoUrl, setVideoUrl] = useState(
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
  );
  function handleChange(e) {
    setSelectedVideo(() => e.target.value.toLowerCase());
  }

  useEffect(() => {
    setVideoUrl(videos[selectedVideo]);
  }, [selectedVideo]);

  return (
    <div className="videoplayer-container">
      <h1 className="title video-title">Videoplayer</h1>
      <select onChange={handleChange} className="videoplayer-select">
        {Object.keys(videos).map((video) => (
          <Option key={video} video={video} />
        ))}
      </select>
      <Video videoUrl={videoUrl} />
    </div>
  );
}
