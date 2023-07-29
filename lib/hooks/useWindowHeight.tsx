import { useEffect, useState } from "react";

const useWindowHeight = (): number => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowHeight;
};

export default useWindowHeight;
