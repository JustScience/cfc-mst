import styled from "styled-components";
import media from "./media";
// import layout from "./layout";

const ResponsiveGuide = styled.div`
  &:after {
    background-color: rgba(0,0,0,0.6);
    bottom: 9px;
    color: #ffffff;
    font-size: 120%;
    font-weight: 600;
    left: 9px;
    line-height: 100%;
    z-index: 99999;
    padding: 9px;
    position: fixed;
    /* visibility: hidden; */

    content:'Responsivity';

    ${media.phoneSM`content:'Small Phone';`}
    ${media.phone`content:'Phone';`}
    ${media.tabletSM`content:'Small Tablet';`}
    ${media.tablet`content:'Tablet';`}
    ${media.tabletLG`content:'Large Tablet';`}
    ${media.laptopSM`content:'Small Laptop';`}
    ${media.laptop`content:'Laptop';`}
    ${media.desktop`content:'Desktop';`}
    ${media.tv`content:'TV';`}
    ${media.tvLG`content:'Large TV';`}
    ${media.uhd`content:'UHD TV';`}
  }
`;

export default ResponsiveGuide;
