import { useEffect, useState } from "react";
import * as S from "./styles/index";
import { useRecoilState } from "recoil";
import { FooterState } from "../../recoil/atom";
import { IdCheckGetAPI } from "../../apis/API";

const Signup = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwCheckValue, setPwCheckValue] = useState("");

  const [isFooterState, setIsFooterState] = useRecoilState(FooterState);

  // 아이디 중복 확인
  const handleIdCheck = async () => {
    const res = await IdCheckGetAPI.post(userNameValue);
    console.log(res);
  };

  const handleuserName = (e) => {
    setUserNameValue(e.target.value);
  };
  const handleIdValue = (e) => {
    setIdValue(e.target.value);
  };
  const handlePwValue = (e) => {
    setPwValue(e.target.value);
  };
  const handlePwCheckValue = (e) => {
    setPwCheckValue(e.target.value);
  };

  // 회원가입 페이지에서는 Footer를 보여주지 않음
  useEffect(() => {
    setIsFooterState(false);
  }, []);

  return (
    <S.SignupWrapper>
      <S.SignupTitleBox>
        <S.SignupTitle>회원가입</S.SignupTitle>
        <S.SignupSubTitle>
          KUIZ 회원가입을 위해 정보를 입력해주세요
        </S.SignupSubTitle>
      </S.SignupTitleBox>
      <S.SignupForm>
        <S.InputBox>
          <S.InputTitle>이름</S.InputTitle>
          <S.InputContent
            value={userNameValue}
            name="name"
            placeholder="이름"
            onChange={handleuserName}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>아이디</S.InputTitle>
          <S.InputContent
            value={idValue}
            name="id"
            placeholder="ID"
            onChange={handleIdValue}
          />
        </S.InputBox>
        <S.IdCheckBtn onClick={handleIdCheck}>중복 확인</S.IdCheckBtn>
        <S.InputBox>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.InputContent
            value={pwValue}
            name="password"
            placeholder="PW"
            onChange={handlePwValue}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>비밀번호 확인</S.InputTitle>
          <S.InputContent
            value={pwCheckValue}
            name="password2"
            placeholder="PW 재확인"
            onChange={handlePwCheckValue}
          />
        </S.InputBox>
      </S.SignupForm>
    </S.SignupWrapper>
  );
};

export default Signup;
