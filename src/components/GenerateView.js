import React, { useState } from "react";
import up from "../assets/images/upbutton.svg";
import down from "../assets/images/downbutton.svg";
import generate from "../assets/images/generatebutton.svg";
import trash from "../assets/images/trash.svg";
import add from "../assets/images/add.svg";
import styled from "styled-components";

export const GenerateView = () => {
  const [multipleChoiceNumber, setMultipleChoiceNumber] = useState(0);
  const [subjectiveNumber, setSubjectiveNumber] = useState(0);

  return (
    <GenerateWrapper>
      <section>
        <div className="section_header">
          <img src={trash} className="trash_button" alt="삭제 버튼" />
          <img src={add} className="add_button" alt="추가 버튼" />
        </div>
        <div className="section_lists"></div>
      </section>
      <div className="mid_section"></div>
      <div className="right_section"></div>
      <footer>
        <div className="generate_footer">
          <div className="multiple">
            <div className="probType">객관식</div>
            <div className="number_select">
              <div className="number">{multipleChoiceNumber}</div>
              <div className="number_button">
                <img
                  src={up}
                  className="up"
                  onClick={() =>
                    setMultipleChoiceNumber(multipleChoiceNumber + 1)
                  }
                  alt="증가 버튼"
                />
                <img
                  src={down}
                  className="down"
                  onClick={() =>
                    multipleChoiceNumber > 0 &&
                    setMultipleChoiceNumber(multipleChoiceNumber - 1)
                  }
                  alt="감소 버튼"
                />
              </div>
            </div>
          </div>
          <div className="subjective">
            <div className="probType">주관식</div>
            <div className="number_select">
              <div className="number">{subjectiveNumber}</div>
              <div className="number_button">
                <img
                  src={up}
                  className="up"
                  onClick={() => setSubjectiveNumber(subjectiveNumber + 1)}
                  alt="증가 버튼"
                />
                <img
                  src={down}
                  className="down"
                  onClick={() =>
                    subjectiveNumber > 0 &&
                    setSubjectiveNumber(subjectiveNumber - 1)
                  }
                  alt="감소 버튼"
                />
              </div>
            </div>
          </div>
          <img src={generate} className="generate_button" alt="생성 버튼" />
        </div>
      </footer>
    </GenerateWrapper>
  );
};

export const GenerateWrapper = styled.div`
  display: flex;
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88px;
    border: 1px solid #e1e1e1;
    background: #fff;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

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
