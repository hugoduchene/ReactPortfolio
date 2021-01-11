import { keyframes } from "styled-components"

export const slideToRight = keyframes`
  from {
    transform: translateX(-50ch);
  }

  to {
    transform: translateX(0);
  }
`;

export const slideToLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50ch);
  }
`;

export const rotate90 = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(90deg);
    }
`;