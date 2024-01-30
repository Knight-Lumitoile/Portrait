import { keyframes } from "@emotion/react";

const FadeUp = (d) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${d}px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const FadeRight = (d) => keyframes`
  from {
    opacity: 0;
    transform: translateX(-${d}px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Flip = () => keyframes`
  from {
    opacity: 0;
    transform: rotateY(60deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0);
  }
`;

export { FadeUp, FadeRight, Flip };
