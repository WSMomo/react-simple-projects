export function Video({ videoUrl }) {
  console.log(videoUrl);
  return (
    <div className="video-container">
      <video width="320" controls src={videoUrl} className="video" />
    </div>
  );
}
