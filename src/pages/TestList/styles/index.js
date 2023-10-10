import { styled } from "styled-components";

export const TestWrapper = styled.div`
  width: 820px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge의 스크롤바를 숨김 */
  }
  -ms-overflow-style: none; /* IE, Edge에서 스크롤바를 숨김 */
  scrollbar-width: none; /* Firefox에서 스크롤바를 숨김 */
`;

export const TestList = styled.div`
  width: 100%;
  height: 258px;
`;

export const TestMultipleChoice = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 32px;
`;

export const TestSubjective = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 100%;
`;

export const TestTitleSmallTitle = styled.div`
  width: 73px;
  height: 15px;
  margin-left: 48px;
  padding-top: 8px;
  color: #2f3042;
  leading-trim: both;
  text-edge: cap;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TestTitleMain = styled.div`
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 8px;
  margin-left: 48px;
`;

export const TestTitle = styled.div`
  width: 100%;
  height: 59px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;
`;

export const TestProblem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 199px;
  margin-bottom: 32px;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  border-top: 1px solid transparent;
`;

export const TestProblem_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 199px;
  margin-bottom: 32px;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  border-top: 1px solid transparent;
`;

export const TestProblem1 = styled.div`
  width: 100px;
  height: 26px;
  border-radius: 16px;
  margin-left: 64px;
  leading-trim: both;
  text-edge: cap;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 23px;
  background-color: #e7ecf8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "#e7ecf8")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#a3a3a3;")};
  cursor: pointer; // 선택지를 클릭할 수 있음을 나타내기 위해
`;

export const TestProblem2 = styled.div`
  width: 100px;
  height: 26px;
  border-radius: 16px;
  margin-left: 64px;
  color: #a3a3a3;
  leading-trim: both;
  text-edge: cap;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  background-color: #e7ecf8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "#e7ecf8")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#a3a3a3;")};
  cursor: pointer; // 선택지를 클릭할 수 있음을 나타내기 위해
`;

export const TestProblem3 = styled.div`
  width: 100px;
  height: 26px;
  border-radius: 16px;
  margin-left: 64px;
  color: #a3a3a3;
  leading-trim: both;
  text-edge: cap;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  background-color: #e7ecf8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "#e7ecf8")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#a3a3a3;")};
  cursor: pointer; // 선택지를 클릭할 수 있음을 나타내기 위해
`;

export const TestProblem4 = styled.div`
  width: 100px;
  height: 26px;
  border-radius: 16px;
  margin-left: 64px;
  color: #a3a3a3;
  leading-trim: both;
  text-edge: cap;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  background-color: #e7ecf8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "#e7ecf8")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#a3a3a3;")};
  cursor: pointer; // 선택지를 클릭할 수 있음을 나타내기 위해
`;

export const TestProblemSubjective = styled.textarea`
  width: 90%;
  height: 85%;
  background-color: #d9d9d9;
  font-size: 15px;
  padding-left: 10px;
  padding-top: 10px;
  border: none;
  resize: none;
  outline: none;
  overflow: auto;
  text-align: left;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 87vh;
  @media (min-height: 1024px) {
    height: 91vh;
  }
`;

export const StickyFooter = styled.footer`
  background-color: white;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100px;
  position: sticky;
  z-index: 10000;
  top: 0;
`;

export const SubmitButton = styled.button`
  margin-right: 108px;
  display: flex;
  width: 240px;
  height: 48px;
  padding: 0px 16px;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  margin-left: auto;
  font-size: 16px;
  background-color: #312e81;
  color: white;
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    color: black;
  }
`;
