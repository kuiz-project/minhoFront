import React, { useState } from "react";
import * as S from "./styles/index";
const TestList = () => {
  // 사용자가 제출했는지 여부를 확인하는 상태
  const [submitted, setSubmitted] = useState(false);
  const handleSubmitAnswers = () => {
    console.log("제출된 답안:", answers);
    setSubmitted(true);
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
    e.preventDefault();
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
      answerIndex: 1,
    },
    {
      type: "multipleChoice",
      main: "최훈오 학생이 존잘인 이유를 10가지 설명하시요.",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
      answerIndex: 1,
    },
    {
      type: "multipleChoice",
      main: "앱이 응답하면 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
      answerIndex: 2,
    },
    {
      type: "subjective",
      main: "이민호 학생이 존잘인 이유를 10가지 설명하시요.",
      answerText: "이 문제의 정답 예제",
    },
    {
      type: "multipleChoice",
      main: "앱이 응답하지 않으면 해당 응용 프로그램의 이름을 선택하고 강제종료를 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
      answerIndex: 2,
    },
    {
      type: "subjective",
      main: "이민호 학생이 존잘인 이유를 10가지 설명하시요.",
      answerText: "이 문제의 정답 예제",
    },
    {
      type: "multipleChoice",
      main: "앱이 응답하지 않으면 해당 응용 프로그램의 이름을 선택하고 강제종료를 클릭하시오",
      choices: ["가나다라", "긔늬듸릐", "기니디리", "그느드르"],
      answerIndex: 3,
    },
    // ... 추가 문제들
  ];

  return (
    <S.AppContainer>
      <S.TestWrapper>
        <S.TestList>
          {questions.map((question, index) => {
            const isCorrect =
              question.type === "multipleChoice"
                ? answers[index] === question.answerIndex
                : answers[index] === question.answerText;
            const titleStyle =
              submitted && !isCorrect
                ? { backgroundColor: "#FDA5A5" }
                : { backgroundColor: "#E7ECF8" };

            if (question.type === "multipleChoice") {
              return (
                <S.TestMultipleChoice key={index}>
                  <S.TestTitle style={titleStyle}>
                    <S.TestTitleSmallTitle>객관식 문제</S.TestTitleSmallTitle>
                    <S.TestTitleMain>
                      {index + 1}. {question.main}
                    </S.TestTitleMain>
                  </S.TestTitle>
                  <S.TestProblem>
                    {question.choices.map((choice, idx) => {
                      const isSelected = selectedChoices[index] === idx;
                      const isAnswer = question.answerIndex === idx;

                      // 조건에 따라 빨간색 테두리 적용
                      const choiceStyle = {};
                      if (submitted && !isCorrect && isAnswer) {
                        choiceStyle.border = "2px solid red";
                      }

                      const ChoiceComponent = S[`TestProblem${idx + 1}`];
                      return (
                        <ChoiceComponent
                          key={idx}
                          style={choiceStyle} // 적용한 스타일을 여기에 추가
                          isSelected={isSelected}
                          onClick={() => handleChoiceClick(index, idx)}
                        >
                          {String.fromCharCode(65 + idx)}. {choice}
                        </ChoiceComponent>
                      );
                    })}
                  </S.TestProblem>
                  {submitted && !isCorrect && <S.IncorrectAnswerNotice />}
                </S.TestMultipleChoice>
              );
            } else if (question.type === "subjective") {
              return (
                <S.TestSubjective key={index}>
                  <S.TestTitle style={titleStyle}>
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
                  {submitted && !isCorrect && <S.IncorrectAnswerNotice />}
                </S.TestSubjective>
              );
            }
            return null;
          })}
        </S.TestList>
      </S.TestWrapper>
      <S.StickyFooter>
        <S.SubmitButton
          disabled={!allQuestionsAnswered()}
          onClick={handleSubmitAnswers}
        >
          제출
        </S.SubmitButton>
      </S.StickyFooter>
    </S.AppContainer>
  );
};

export default TestList;
