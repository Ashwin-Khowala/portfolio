import loadingVideo from "../assets/loading_video.mp4";
import React, { useState, useEffect } from "react";
import "./LoadingPage.css";

export default function LoadingPage({ onLoaded }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onLoaded();
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={`loading-page ${fadeOut ? "fade-out" : ""}`}>
      <video className="video" src={loadingVideo}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
        autoPlay loop muted></video>
      <div className="loading-text">Loading your experience...</div>
    </div>
  );
}
