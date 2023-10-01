import React, { useState } from "react";
import * as S from "./styles/index";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../recoil/atom";

import { SignupWrapper } from "./../Signup/styles/index";
import {
  InputBox,
  InputContent,
  SignupForm,
  InputTitle,
} from "../Signup/styles";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoginState, setIsLoginState] = useRecoilState(LoginState);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <SignupWrapper>
      <S.LoginTitleBox>
        <img src={logo} alt="로고 이미지" />
        <S.LoginTitle>로그인</S.LoginTitle>
      </S.LoginTitleBox>
      <SignupForm>
        <InputBox>
          <InputTitle>아이디</InputTitle>
          <InputContent
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle>비밀번호</InputTitle>
          <InputContent
            type="password"
            placeholder="PW"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </InputBox>
        <S.LoginBtnBox>
          <S.LoginBtn onClick={() => navigate("/login")}>로그인</S.LoginBtn>
          <S.SignupBtn onClick={() => navigate("/signup")}>
            회원가입
          </S.SignupBtn>
        </S.LoginBtnBox>
      </SignupForm>
    </SignupWrapper>
  );
};

export default LoginPage;
