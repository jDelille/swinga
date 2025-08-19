import { useEffect, useRef } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none"; // stop text highlighting
      el.querySelectorAll("th, td").forEach(cell => {
        (cell as HTMLElement).style.pointerEvents = "none"; // disable clicks
      });

      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.userSelect = "";
      el.querySelectorAll("th, td").forEach(cell => {
        (cell as HTMLElement).style.pointerEvents = "";
      });
    };

    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.userSelect = "";
      el.querySelectorAll("th, td").forEach(cell => {
        (cell as HTMLElement).style.pointerEvents = "";
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1; // scroll speed multiplier
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return ref;
}