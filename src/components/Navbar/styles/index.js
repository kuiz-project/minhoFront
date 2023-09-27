import { styled } from "styled-components";

export const NavbarWrapper = styled.div`
  padding: 22px;
  height: 88px;
  
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .userProfile {
    width: 41px;
    height: 41px;
  }

  .navBarLeftBox {
    display: flex;
    gap: 60px;
    .navBtnWrapper {
      display: flex;
      gap: 8px;
    }
  }
  .navBarRightBox {
    .loginBtn {
      height: 42px;
      display: flex;
      padding: 16px 24px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      border: 1px solid #c9d2fa;
      color: #000;
      font-size: 14px;
    }
    img {
      cursor: pointer;
    }
  }

  
`;

export const NavBarItem = styled.button`
  padding: 16px 24px 16px 23px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: ${({ isSelected }) => (isSelected ? "#3830a3" : "#a3a3a3")};
  &:hover {
    color: #3730a3;
  }
`;
