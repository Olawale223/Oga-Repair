"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import "./component.css";

export default function Providers({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
