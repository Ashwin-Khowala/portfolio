// "use client";
// import React, { useState, useEffect } from "react";
// import "../LoadingPage.css";
// import { isLoadingAtom }  from "@/atoms/IsLoading";
// import { useRecoilState } from "recoil";

// export default function LoadingPage() {
//   const loadingVideo="/videos/loading_video.mp4"
//   const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
//   const [fadeOut, setFadeOut] = useState(false);
//
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFadeOut(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [isLoading]);

//   return (
//     <div className={`loading-page ${fadeOut ? "fade-out" : ""}`}>
//       <video className="video" src={loadingVideo}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           objectFit: 'cover',
//           zIndex: -1,
//         }}
//         autoPlay loop muted></video>
//       <div className="loading-text">Loading your experience...</div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import "../LoadingPage.css";
import { isLoadingAtom, shouldShowLoadingAtom } from "@/atoms/IsLoading";
import { useSetAtom } from "jotai";

export default function LoadingPage() {
  // Fix the video path - remove 'public/' as Next.js serves public files from root
  const loadingVideo = "/videos/loading_video.mp4";
  const [fadeOut, setFadeOut] = useState(false);
  
  // Only use setters, don't read isLoading here to avoid conflicts
  const setIsLoading = useSetAtom(isLoadingAtom);
  const setShouldShowLoading = useSetAtom(shouldShowLoadingAtom);

  useEffect(() => {
    // Start fade out after 2 seconds (adjust timing as needed)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Complete loading after fade animation (1 second fade + 2 second display = 3 seconds total)
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setShouldShowLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []); // Empty dependency array since this should only run once when component mounts

  return (
    <div className={`loading-page ${fadeOut ? "fade-out" : ""}`}>
      <video 
        className="video" 
        src={loadingVideo}
        autoPlay 
        loop 
        muted
        playsInline
      />
      <div className="loading-text">Loading your experience...</div>
    </div>
  );
}