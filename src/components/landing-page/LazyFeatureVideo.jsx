import { useEffect, useRef } from "react";

const LazyFeatureVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className=" w-full h-full object-contain"
      muted
    />
  );
};

export default LazyFeatureVideo;
