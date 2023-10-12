import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./../components/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <MainLayoutWrapper>
      {/* 고정 Nav 바 */}
      <Navbar />
      {/* 변화하는 부분 */}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
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
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
`;
