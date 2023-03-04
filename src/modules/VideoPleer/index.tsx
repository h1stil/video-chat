import React, { useEffect, useRef } from "react";

import "./index.scss";

export const VideoPleer: React.FC<{ stream: MediaStream }> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);

  return (
    <video
      className="video-player"
      ref={videoRef}
      autoPlay
      muted={false}
      controls
      disablePictureInPicture
    ></video>
  );
};
