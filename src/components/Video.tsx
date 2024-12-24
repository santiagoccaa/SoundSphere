

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        title="arcane"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      >
        <source
          src={`/video.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;