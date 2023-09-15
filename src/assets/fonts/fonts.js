import { css } from "styled-components";

import NotoSansBold from "./NotoSansKR-Bold.woff";
import NotoSansMedium from "./NotoSansKR-Medium.woff";
import NotoSansRegular from "./NotoSansKR-Regular.woff";

export const fonts = css`
  @font-face {
    font-family: "Noto Sans KR_Regular";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansRegular}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR_Medium";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansMedium}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR_Bold";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansBold}) format("woff");
  }
`;
