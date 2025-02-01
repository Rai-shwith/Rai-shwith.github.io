import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const VideoComponent = ({ videoSrc, poster, posterLight }) => {
  const videoRef = useRef(null);
  const { theme } = useTheme();
    

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
    ref={videoRef}
    muted
    autoPlay
    loop
    playsInline
    className="relative w-full transition-all duration-300 ease-in-out hover:scale-105"
    poster={
      posterLight
        ? theme == "light"
          ? `/thumbnail/${posterLight}`
          : `/thumbnail/${poster}`
        : `/thumbnail/${poster}`
    }
    onMouseEnter={(e) => e.target.pause()}
    onMouseLeave={(e) => e.target.play()}
  >
    <source src={`/videos/${videoSrc}`} type="video/mp4" />
  </video>
  );
};

export default VideoComponent;
