import { useState, useEffect, useRef } from "react";

export const useComponentVisible = props => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  return { ref, visible, setVisible };
};
