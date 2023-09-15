import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/Ellipse 2.svg";
import login from "../../assets/images/loginbutton.svg";
import * as S from "./styles/index";

const Navbar = () => {
  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Nav바 상태
  const [navItem, setNavItem] = useState([
    {
      name: "문제 생성",
      isSelected: true,
    },
    {
      name: "나의 시험지",
      isSelected: false,
    },
    {
      name: "결제정보",
      isSelected: false,
    },
  ]);

  const handleNavItem = (index) => {
    console.log(index);
    const newNavItem = [...navItem];
    newNavItem.map((item, idx) => {
      if (index === idx) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setNavItem(newNavItem);
  };
  console.log(navItem);

  return (
    <S.NavbarWrapper>
      <section className="navBarLeftBox">
        <img src={logo} alt="로고 이미지" className="navLogo" />
        <div className="navBtnWrapper">
          {navItem.map((item, idx) => {
            return (
              <S.NavBarItem
                onClick={() => handleNavItem(idx)}
                isSelected={item.isSelected}
              >
                {item.name}
              </S.NavBarItem>
            );
          })}
        </div>
      </section>
      <section className="navBarRightBox">
        {isLoggedIn ? (
          <img src={user} className="userProfile" alt="유저 로고 이미지" />
        ) : (
          <button src={login} className="loginBtn">
            로그인
          </button>
        )}
      </section>
    </S.NavbarWrapper>
  );
};

export default Navbar;
