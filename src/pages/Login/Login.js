import React, { useState } from "react";
import * as S from "./styles/index";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../recoil/atom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoginState, setIsLoginState] = useRecoilState(LoginState);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <S.LoginWrapper>
      <S.LoginTitleBox>
        <img src={logo} alt="로고 이미지" />
        <S.LoginTitle>로그인</S.LoginTitle>
      </S.LoginTitleBox>
      <S.LoginForm>
        <S.IdPwWrapper>
          <S.LoginInput
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <S.LoginInput
            type="password"
            placeholder="PW"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </S.IdPwWrapper>
        <S.LoginBtnBox>
          <S.LoginBtn onClick={() => navigate("/login")}>로그인</S.LoginBtn>
          <S.SignupBtn onClick={() => navigate("/signup")}>
            회원가입
          </S.SignupBtn>
        </S.LoginBtnBox>
      </S.LoginForm>
    </S.LoginWrapper>
  );
};

export default LoginPage;
