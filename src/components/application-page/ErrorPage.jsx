import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PiSmileyMelting } from "react-icons/pi";
const ErrorPage = () => {
  const smileyRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      smileyRef.current,
      { x: -130, scale: 0.8, opacity: 0.5, rotate: 0 },
      {
        x: 70,
        scale: 1.2,
        opacity: 1,
        rotate: 360,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "power2.inOut",
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className="flex-center flex-col gap-4 h-[90vh]  
    text-white"
    >
      <p ref={smileyRef} className="text-9xl text-white font-bold ">
        <PiSmileyMelting />
      </p>

      <p
        className="text-6xl text-transparent font-bold 
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text 
      "
      >
        404-Page Not Found{" "}
      </p>
      <div className="fle flex-col gap-2">
        <p className="text-xl">{`Oops! The page you're trying to access doesn't exist.`}</p>
        <p className="text-xl text-center">{`Try going back`}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
