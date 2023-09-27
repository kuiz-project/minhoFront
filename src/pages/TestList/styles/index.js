import { styled } from "styled-components";

export const TestWrapper = styled.div`
width: 820px;
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 42px;

background-color:#fbfbfb;
overflow-y: auto;
&::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Edge의 스크롤바를 숨김 */
}

-ms-overflow-style: none;  /* IE, Edge에서 스크롤바를 숨김 */
scrollbar-width: none;  /* Firefox에서 스크롤바를 숨김 */
`;

export const TestList = styled.div`
margin-top:32px;
width:100%;
height:258px;
`;

export const TestMultipleChoice = styled.div`

`;

export const TestSubjective = styled.div`

`;

export const TestTitleSmallTitle = styled.div`
    width:73px;
    height:15px;
    margin-left:48px;
    padding-top:8px;
    color: #2F3042;
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
margin-top:8px;
margin-left:48px;
`;

export const TestTitle = styled.div`
width:100%;
height:59px;
border-radius: 8px 8px 0px 0px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
margin-bottom:4px;
`;

export const TestProblem = styled.div`
width:100%;
height:199px;
margin-bottom: 32px;
border-radius: 0px 0px 8px 8px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
border-top: 1px solid transparent;
`;

export const TestProblem1 = styled.div`
width:100px;
height: 26px;
border-radius: 16px;
margin-left: 64px;
color: #A3A3A3;
leading-trim: both;
text-edge: cap;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:23px;
background-color:#E7ECF8;
display: flex;            
justify-content: center;  
align-items: center;

`;
export const TestProblem2 = styled.div`
width:100px;
height: 26px;
border-radius: 16px;
margin-left: 64px;
color: #A3A3A3;
leading-trim: both;
text-edge: cap;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:20px;
background-color:#E7ECF8;
display: flex;            
justify-content: center;  
align-items: center;
`;
export const TestProblem3 = styled.div`
width:100px;
height: 26px;
border-radius: 16px;
margin-left: 64px;
color: #A3A3A3;
leading-trim: both;
text-edge: cap;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:20px;
background-color:#E7ECF8;
display: flex;            
justify-content: center;  
align-items: center;
`;
export const TestProblem4 = styled.div`
width:100px;
height: 26px;
border-radius: 16px;
margin-left: 64px;
color: #A3A3A3;
leading-trim: both;
text-edge: cap;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:20px;
background-color:#E7ECF8;
display: flex;            
justify-content: center;  
align-items: center;
`;