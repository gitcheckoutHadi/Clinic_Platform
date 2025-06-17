import { useEffect, useRef } from "react";

const useClickOutside = (
  isVisible: boolean,
  closeCallback: () => void
): React.RefObject<HTMLDivElement | null> => {
  // Allow null
  const ref = useRef<HTMLDivElement | null>(null); // Initialize with null

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && event.target instanceof Node) {
        if (!ref.current.contains(event.target)) {
          closeCallback();
        }
      }
    };

    if (isVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible, closeCallback]);

  return ref;
};

export default useClickOutside;
