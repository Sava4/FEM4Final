import { useEffect } from "react";

export const useOnClickOutside = (refs = [], handler) => {
  useEffect(() => {
    const listener = event => {
      if (!contains(refs, event.target)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler]);
};

function contains(refs, target) {
  return refs
    .map(ref => {
      return ref.current;
    })
    .filter(element => {
      return element;
    })
    .some(element => {
      return element.contains(target);
    });
}
