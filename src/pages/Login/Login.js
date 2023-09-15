import React, { useState } from "react";
import * as S from "./styles/index";
import line from "../../assets/images/line.svg";
import logo from "../../assets/images/logo.svg";
import loginbutton from "../../assets/images/loginbutton.svg";
import signupbutton from "../../assets/images/signupbutton.svg";
import kakaologinbutton from "../../assets/images/kakaoLogin.png";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <S.LoginWrapper>
      <header>
        <div className="header_logo">
          <img src={logo} alt="로고 이미지" />
        </div>
        <div className="header_text">로그인</div>
      </header>
      <main>
        <div className="idpw">
          <input
            className="id"
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className="pw"
            type="password"
            placeholder="PW"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="loginsignup">
          <div className="login">
            <img src={loginbutton} alt="로그인 버튼" />
          </div>
          <div className="sigunup">
            <img src={signupbutton} alt="회원가입 버튼" />
          </div>
        </div>
        <div className="bar">
          <img src={line} alt="선" />
        </div>
        <img src={kakaologinbutton} alt="카카오 로그인 버튼" />
      </main>
    </S.LoginWrapper>
  );
};

export default LoginPage;
