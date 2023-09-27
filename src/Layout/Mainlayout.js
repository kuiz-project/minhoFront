import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useRecoilState } from "recoil";
import { FooterState } from "../recoil/atom";

const Mainlayout = () => {
  const [isFooterState, setIsFooterState] = useRecoilState(FooterState);

  return (
    <MainLayoutWrapper>
      {/* 고정 Nav 바 */}
      <Navbar/>
      {/* 변화하는 부분 */}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>

      {/*  로그인 페이지에서는 Footer 제거 */}
      {isFooterState && <Footer />}
    </MainLayoutWrapper>
  );
};

export default Mainlayout;

export const MainLayoutWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OutletWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fbfbfb;
`;