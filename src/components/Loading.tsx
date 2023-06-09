import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../assets/animation.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={"100vh"} />;
};

export default Loading;
