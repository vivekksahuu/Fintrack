import { useEffect, useRef, useState } from "react";

const LazyHeroVideo = ({ src }) => {
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
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gray-300 animate-pulse z-10" />
      )}
      <video
        ref={videoRef}
        src={src}
        className={`rounded-2xl w-full transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoadedData={() => setLoading(false)}
        muted
        {...(showControls ? { controls: true } : {})}
      />
    </div>
  );
};

export default LazyHeroVideo;
