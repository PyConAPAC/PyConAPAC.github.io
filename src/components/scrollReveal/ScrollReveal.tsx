import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
  children: React.ReactNode,
  delay: number | 0,
  interval: number | 0,
  distance: string | '0px',
  origin: string | 'bottom',
}

const ScrollReveal: FC<ScrollRevealProps> = ({ 
  children, 
  delay,
  interval,
  distance,
  origin,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: delay,
        interval: interval,
        distance: distance,
        origin: origin,
        cleanup: true,
        easing: 'ease-in'
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section"
      data-testid="section"
      style={{ opacity: 'unset !important' }}
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
