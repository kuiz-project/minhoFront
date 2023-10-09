import React, { useState } from "react";
import * as S from "./styles/index";
const TestList = () => {
  const handleSubmitAnswers = () => {
    console.log("제출된 답안:", answers);
    // 필요하다면 여기서 answers를 서버로 전송하거나 다른 처리를 할 수 있습니다.
  };
  const allQuestionsAnswered = () => {
    return Object.keys(answers).length === questions.length;
  };
  const [selectedChoices, setSelectedChoices] = useState({});
  // 각 문제에 대한 답안을 저장하는 상태
  const [answers, setAnswers] = useState({});
  const handleChoiceClick = (questionIndex, choiceIndex) => {
    setSelectedChoices({
      ...selectedChoices,
      [questionIndex]: choiceIndex,
    });
    setAnswers({
      ...answers,
      [questionIndex]: choiceIndex,
    });
    console.log(`문제 ${questionIndex + 1}의 선택된 답안: ${choiceIndex}`);
  };
  const handleSubjectiveBlur = (questionIndex, e) => {
    setAnswers({
      ...answers,
      [questionIndex]: e.target.value,
    });
    console.log(`문제 ${questionIndex + 1}의 입력된 답안: ${e.target.value}`);
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
    <S.AppContainer>
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
                    <S.TestProblemSubjective
                      placeholder="여기에 답 입력"
                      defaultValue={answers[index] || ""}
                      onBlur={(e) => handleSubjectiveBlur(index, e)}
                    />
                  </S.TestProblem_2>
                </S.TestSubjective>
              );
            }
            return null; // 다른 유형의 문제가 추가될 경우 확장할 수 있습니다.
          })}
        </S.TestList>
      </S.TestWrapper>
      <S.StickyFooter>
        <S.SubmitButton disabled={!allQuestionsAnswered()}>제출</S.SubmitButton>
      </S.StickyFooter>
    </S.AppContainer>
  );
};

export default TestList;
