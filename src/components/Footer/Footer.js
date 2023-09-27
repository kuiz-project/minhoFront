import React, { useState } from "react";
import up from "../../assets/images/upbutton.svg";
import down from "../../assets/images/downbutton.svg";
import * as S from "./styles/index";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [multipleChoiceNumber, setMultipleChoiceNumber] = useState(0);
  const [subjectiveNumber, setSubjectiveNumber] = useState(0);
  const navigate = useNavigate();

  return (
    <S.GenerateWrapper>
      <div className="multiple">
        <div className="probType">객관식</div>
        <div className="number_select">
          <div className="number">{multipleChoiceNumber}</div>
          <div className="number_button">
            <img
              src={up}
              className="up"
              onClick={() => setMultipleChoiceNumber(multipleChoiceNumber + 1)}
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
      <S.GenerateBtn
        onClick={() => {
          navigate("pdf");
        }}
      >
        업로드
      </S.GenerateBtn>
    </S.GenerateWrapper>
  );
};

export default Footer;
