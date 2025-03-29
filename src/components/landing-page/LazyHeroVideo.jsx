import { useEffect, useRef, useState } from "react";

const LazyLoadVideo = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowControls(window.innerWidth <= 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

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
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (video) observer.unobserve(video);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      {loading && (
        <img
          src="/heroImage.jpg"
          alt="Loading preview"
          className="w-full rounded-2xl absolute top-0 left-0"
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className="rounded-2xl w-full"
        onLoadedData={() => setLoading(false)} // When video is loaded, hide image
        {...(showControls ? { controls: true } : {})}
      />
    </div>
  );
};

export default LazyLoadVideo;
