import { useEffect, useRef } from "react";

const MappedIndexClickOutSide = (
  callback: React.Dispatch<React.SetStateAction<number | null>>
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(null); // Pass null as an argument
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ref;
};

export default MappedIndexClickOutSide;
