import { useEffect, useState } from "react";

const useResponsive = (breakpoint: number = 769): boolean => {
  const [isResponsive, setIsResponsive] = useState(
    () => window.innerWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isResponsive;
};

export default useResponsive;
