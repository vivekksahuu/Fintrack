import { useEffect, useRef, useState } from "react";

const LazyFeatureVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleCanPlayThrough = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-lg z-10" />
      )}
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        muted
        onCanPlayThrough={handleCanPlayThrough}
      />
    </div>
  );
};

export default LazyFeatureVideo;
