import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/Ellipse 2.svg";
import login from "../../assets/images/loginbutton.svg";
import * as S from "./styles/index";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Nav바 상태
  const [navItem, setNavItem] = useState([
    {
      name: "문제 생성",
      isSelected: true,
      url: "upload",
    },
    {
      name: "나의 시험지",
      isSelected: false,
      url: "mytest",
    },
    {
      name: "결제정보",
      isSelected: false,
      url: "no",
    },
  ]);

  const handleNavItem = (index) => {
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

  // 페이지 이동
  const handlePage = () => {
    const targetPage = navItem.filter((item) => item.isSelected)[0];
    navigate(targetPage.url);
  };

  useEffect(() => {
    handlePage();
  }, [navItem]);

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
