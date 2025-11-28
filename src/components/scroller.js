import React, { useRef, useEffect, useState } from "react";
import "../styles/scroller.css";

const InfiniteScroller = ({ speed = 20, children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [copies, setCopies] = useState(2);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !contentRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      const needed = Math.ceil((containerWidth * 2) / contentWidth);

      setCopies(needed);

      // ensure next paint cycle completes before enabling animation
      requestAnimationFrame(() => {
        setReady(true);
      });
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("load", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className="scroller-outer"
      style={{ "--duration": `${speed}s` }}
    >
      <div className={`scroller-track ${ready ? "is-ready" : ""}`}>
        {[...Array(copies)].map((_, i) => (
          <div
            key={i}
            className="scroller-content"
            ref={i === 0 ? contentRef : null}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
