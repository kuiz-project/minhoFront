import React, { useState } from "react";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import resultbutton from "../../assets/images/resultbutton.svg";
import * as S from "./styles/index";

const Mytest = () => {
  const [selected, setSelected] = useState(null);
  const [selectedPage, setSelectedPage] = useState(0);

  // 클릭 이벤트 핸들러
  const handleDivClick = (index) => {
    if (selected === index) {
      setSelected(null); // 이미 선택된 div를 다시 클릭하면 선택을 해제
    } else {
      setSelected(index); // 새로운 div를 클릭하면 그 div를 선택
    }
  };

  const testData = [
    {
      b1: "fkfkfkfkfk",
      b2: "운체제",
      b3: "PDF 이름_번호",
      b4: "210",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    // ... (나머지 데이터)
  ];
  const testData2 = [
    {
      b1: "fk4fk",
      b2: "운체kkkk제",
      b3: "PDF 이름_번호",
      b4: "34",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "1/20",
    },
    {
      b1: "ㅁ낭러니ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "20",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "22",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄴ 이름_번호",
      b4: "25",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "26",
      b5: "2023.01.05",
      b6: "3/20",
    },
    // ... (나머지 데이터)
  ];
  const testData3 = [
    {
      b1: "f",
      b2: "운k제",
      b3: "PDF 이름_번호",
      b4: "01",
      b5: "2022.01.02",
      b6: "3/20",
    },
    {
      b1: "ㅁ",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "21",
      b5: "2033.01.02",
      b6: "15/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "2",
      b5: "2023.01.02",
      b6: "1/20",
    },
    {
      b1: "ㅁ낭러니ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "20",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "22",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄴ 이름_번호",
      b4: "25",
      b5: "2023.01.02",
      b6: "13/20",
    },
    {
      b1: "ㅁ낭러니ㅏㅇ리ㅏㄴㅇ러",
      b2: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      b3: "ㄴㅇㄹㄴㅇㄹㅇㄹㄴ 이름_번호",
      b4: "26",
      b5: "2023.01.05",
      b6: "3/20",
    },
    // ... (나머지 데이터)
  ];

  let displayData;
  switch (selectedPage) {
    case 0:
      displayData = testData;
      break;
    case 1:
      displayData = testData2;
      break;
    case 2:
      displayData = testData3;
      break;
    default:
      displayData = testData; // 기본값 설정
      break;
  }
  return (
    <S.MytestWrapper>
      <div className="left_header">
          <div className="left_header_top">나의 시험지</div>
          <div className="left_header_bottom">
            나의 시험지를 통해 틀린 문제를 점검하고 무엇무엇을 향상시켜보세용
          </div>
        </div>
      <div className="mytest_left">
        
        <div className="left_body">
          <div className="left_body_header">
            <div className="h1">디렉토리명</div>
            <div className="h2">강의명</div>
            <div className="h3">테스트명</div>
            <div className="h4">페이지</div>
            <div className="h5">출제일</div>
            <div className="h6">점수</div>
          </div>
          {displayData.map((data, index) => (
            <div
              key={index}
              className="left_body_contents"
              style={
                selected === index
                  ? { borderRadius: "12px", background: "#E3E6F2" }
                  : selected === index + 1
                  ? { border: "none" }
                  : {}
              }
              onClick={() => handleDivClick(index)}
            >
              <div className="b1">{data.b1}</div>
              <div className="b2">{data.b2}</div>
              <div className="b3">{data.b3}</div>
              <div className="b4">{data.b4}</div>
              <div className="b5">{data.b5}</div>
              <div className="b6">{data.b6}</div>
            </div>
          ))}
          <div className="left_body_footer">
            <img
              src={left}
              alt="왼쪽 버튼"
              className="button"
              onClick={() => {
                if (selectedPage > 0) {
                  // 0보다 클 때만 감소
                  setSelectedPage((prevPage) => prevPage - 1);
                }
              }}
            />
            <div className="left_body_footer_lists">
              {Array(3)
                .fill(null)
                .map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="left_body_footer_list"
                    style={
                      selectedPage === pageIndex
                        ? { backgroundColor: "blue", color: "white" }
                        : {}
                    }
                    onClick={() => setSelectedPage(pageIndex)}
                  >
                    {pageIndex + 1}
                  </div>
                ))}
            </div>
            <img
              src={right}
              alt="오른쪽 버튼"
              className="button"
              onClick={() => {
                // 최대 페이지 수 2 (0-based index)를 넘기지 않도록 조건 추가
                if (selectedPage < 2) {
                  setSelectedPage((prevPage) => prevPage + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="mytest_right"></div>
      <footer>
        <img
          src={resultbutton}
          alt="결과 버튼"
          className="resbutton"
          onClick={() => {
            if (selected === null) {
              alert("PDF 선택하셔야죠 인간?");
            } else {
              alert(`${selected + 1}번째 PDF를 누르셨네요!!`);
            }
          }}
        />
      </footer>
    </S.MytestWrapper>
  );
};

export default Mytest;