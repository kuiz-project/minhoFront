import React, { useState } from "react";
import * as S from "./styles/index";
const TestList = () => {
  return ( 
    <S.TestWrapper>
      <S.TestList>
        <S.TestMultipleChoice>
          <S.TestTitle>
            <S.TestTitleSmallTitle>
              객관식 문제
            </S.TestTitleSmallTitle>
            <S.TestTitleMain>
            1. 앱이 응답하지 않으면 해당 응용 프로그램의 이름을 선택하고 강제종료를 클릭하시오
            </S.TestTitleMain>
          </S.TestTitle>
          <S.TestProblem>
            <S.TestProblem1>A. 가나다라</S.TestProblem1>
            <S.TestProblem2>B. 긔늬듸릐</S.TestProblem2>
            <S.TestProblem3>C. 기니디리</S.TestProblem3>
            <S.TestProblem4>D. 그느드르</S.TestProblem4>
          </S.TestProblem>
        </S.TestMultipleChoice>
        <S.TestSubjective>
          <S.TestTitle>
            <S.TestTitleSmallTitle>
              주관식 문제
            </S.TestTitleSmallTitle>
          </S.TestTitle>
          <S.TestProblem></S.TestProblem>
        </S.TestSubjective>
        <S.TestSubjective>
          <S.TestTitle>
            <S.TestTitleSmallTitle>
              주관식 문제
            </S.TestTitleSmallTitle>
          </S.TestTitle>
          <S.TestProblem></S.TestProblem>
        </S.TestSubjective>
        <S.TestSubjective>
          <S.TestTitle>
            <S.TestTitleSmallTitle>
              주관식 문제
            </S.TestTitleSmallTitle>
          </S.TestTitle>
          <S.TestProblem></S.TestProblem>
        </S.TestSubjective>
        <S.TestSubjective>
          <S.TestTitle>
            <S.TestTitleSmallTitle>
              주관식 문제
            </S.TestTitleSmallTitle>
          </S.TestTitle>
          <S.TestProblem></S.TestProblem>
        </S.TestSubjective>
        <S.TestSubjective>
          <S.TestTitle>
            <S.TestTitleSmallTitle>
              주관식 문제
            </S.TestTitleSmallTitle>
          </S.TestTitle>
          <S.TestProblem></S.TestProblem>
        </S.TestSubjective>
      </S.TestList>
    </S.TestWrapper>
  );
};

export default TestList;
