import { css } from "styled-components";
import screens from "./media-sizes";

const media = Object.keys(screens).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (min-width: ${screens[size]}px) {
          ${css(...args)};
        }
      `;
    },
  };
}, {});

export default media;
