import React, { useState } from "react";
import * as S from "./styles/index";
const TestList = () => {
  const [selectedChoices, setSelectedChoices] = useState({});
  const handleChoiceClick = (questionIndex, choiceIndex) => {
    setSelectedChoices({
      ...selectedChoices,
      [questionIndex]: choiceIndex,
    });
  };
  // 예제 문제 데이터
  const questions = [
    {
      type: "multipleChoice",
      main: "앱이 응답하지 않으면 해당 응용 프로그램의 이름을 선택하고 강제종료를 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
    },
    {
      type: "subjective",
      main: "최훈오 학생이 존잘인 이유를 10가지 설명하시요.",
    },
    {
      type: "multipleChoice",
      main: "앱이 응답하면 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
    },
    {
      type: "subjective",
      main: "이민호 학생이 존잘인 이유를 10가지 설명하시요.",
    },
    {
      type: "multipleChoice",
      main: "앱이 응답하지 않으면 해당 응용 프로그램의 이름을 선택하고 강제종료를 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
    },
    {
      type: "subjective",
      main: "이민호 학생이 존잘인 이유를 10가지 설명하시요.",
    },
    {
      type: "multipleChoice",
      main: "앱이 응답하지 않으면 해당 응용 프로그램의 이름을 선택하고 강제종료를 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
    },
    // ... 추가 문제들
  ];

  return (
    <S.TestWrapper>
      <S.TestList>
        {questions.map((question, index) => {
          if (question.type === "multipleChoice") {
            return (
              <S.TestMultipleChoice key={index}>
                <S.TestTitle>
                  <S.TestTitleSmallTitle>객관식 문제</S.TestTitleSmallTitle>
                  <S.TestTitleMain>
                    {index + 1}. {question.main}
                  </S.TestTitleMain>
                </S.TestTitle>
                <S.TestProblem>
                  {question.choices.map((choice, idx) => {
                    const isSelected = selectedChoices[index] === idx;
                    const ChoiceComponent = S[`TestProblem${idx + 1}`];
                    return (
                      <ChoiceComponent
                        key={idx}
                        isSelected={isSelected}
                        onClick={() => handleChoiceClick(index, idx)}
                      >
                        {String.fromCharCode(65 + idx)}. {choice}
                      </ChoiceComponent>
                    );
                  })}
                </S.TestProblem>
              </S.TestMultipleChoice>
            );
          } else if (question.type === "subjective") {
            return (
              <S.TestSubjective key={index}>
                <S.TestTitle>
                  <S.TestTitleSmallTitle>주관식 문제</S.TestTitleSmallTitle>
                  <S.TestTitleMain>
                    {index + 1}. {question.main}
                  </S.TestTitleMain>
                </S.TestTitle>
                <S.TestProblem_2>
                  <S.TestProblemSubjective placeholder="여기에 답 입력" />
                </S.TestProblem_2>
              </S.TestSubjective>
            );
          }
          return null; // 다른 유형의 문제가 추가될 경우 확장할 수 있습니다.
        })}
      </S.TestList>
    </S.TestWrapper>
  );
};

export default TestList;
