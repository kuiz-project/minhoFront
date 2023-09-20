import styled from "styled-components";

export const GenerateWrapper = styled.div`
  max-width: 1920px;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 88px;
  border: 1px solid #e1e1e1;
  background: #fff;
  z-index: 1000;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;

  .generate_footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 636px;
    height: 48px;
    margin-left: auto;
  }

  .probType {
    color: #525252;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .multiple {
    display: flex;
    flex-direction: row;
    width: 169px;
    height: 48px;
    align-items: center;
  }

  .subjective {
    display: flex;
    flex-direction: row;
    width: 169px;
    height: 48px;
    align-items: center;
  }

  .number_select {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .number {
    width: 13px;
    margin-left: 30px;
    color: #909090;
    font-family: Helvetica;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .number_button {
    display: flex;
    flex-direction: column;
    margin-left: 22px;
  }
`;

export const GenerateBtn = styled.button`
  display: flex;
  color: White;
  width: 240px;
  height: 48px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  background: var(--Main, #312e81);
`;
