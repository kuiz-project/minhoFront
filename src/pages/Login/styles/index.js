import { styled } from "styled-components";
export const LoginWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  header {
    display: flex;
    width: 440px;
    height: 142px;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    background: var(--Text_White, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  }

  .header_logo {
    margin-top: 40px;
  }

  .header_text {
    height: 18px;
    width: 80px;
    display: flex;
    justify-content: center;
    color: #494949;
    font-family: Noto Sans KR;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 7px;
  }

  main {
    display: flex;
    width: 440px;
    height: 501px;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    background: var(--Text_White, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  }

  .idpw {
    margin-top: 80px;
    width: 326px;
    height: 108px;
  }

  ::placeholder {
    color: #c8c8c8;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    /* 137.5% */
  }

  .id,
  .id:focus {
    padding-left: 19.5px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background: var(--Gray_3, #f9f9f9);
    margin-bottom: 12px;
    border: none;
    outline: none;
    color: black;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    /* 137.5% */
  }

  .pw,
  .pw:focus {
    padding-left: 19.5px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background: var(--Gray_3, #f9f9f9);
    border: none;
    outline: none;
    color: black;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    /* 137.5% */
  }

  .loginsignup {
    margin-top: 32px;
    width: 260px;
    height: 104px;
  }

  .login {
    margin-bottom: 5px;
  }

  .bar {
    padding: 0;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
