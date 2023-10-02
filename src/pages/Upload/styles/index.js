import styled from "styled-components";

export const UploadWrapper = styled.div`
  width: 100%;
  height:100%;
  section::-webkit-scrollbar {
    display: none;
  }
  display:flex;
  flex-direction:row;
`;

export const DirTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 220px;
  height: 32px;
  border-radius: 5px;
  background: ${({ isSelected }) => (isSelected ? "#312e81" : "#EDEDED")};
  padding: 11px;
`;

export const DirName = styled.span`
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#424242")};
  font-size: 14px;
  font-family: "Noto Sans KR_Medium";
`;

export const SideBarWrapper = styled.section`
  height: 100%;
  width: 270px;
  background-color:white;
  overflow:auto;
`;

export const ToggleBtn = styled.button``;

export const SideBarHeader = styled.section`
  display: flex;
  gap: 15px;
  border: 1px solid #ededed;
  background: var(--Text_White, #fff);
  width: 98%;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  height: 40px;
`;

export const SectionListBox = styled.section`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DirBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const EditBtn = styled.button`
  color: #555;
  font-size: 12px;
  font-weight: 350;
  z-index: 10;
`;

export const DeleteBtn = styled.button``;

export const AddBtn = styled.button``;

export const DirInner = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;

export const LectureUploadWrapper = styled.section`
  max-width: 608px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom:150px;
`;

export const LectureDirectoryWrapper = styled.div`
  display:flex;
  flex-direction:row;
  max-width: 608px;
  width: 100%;
  height: 112px;
  background: var(--Text_White, #fff);
  padding: 24px 74px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom:24px;
  .diruploadtext{
    margin-top:17px;
    margin-left:-28px;
    width:100px;
    margin-right: 27px;
    height:15px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .diruploadinput{
    width: 350px;
height: 48px;
flex-shrink: 0;
border-radius: 4px;
background: #EAEAEA;
margin-top:8px;
  }
`;

export const LectureName = styled.div`
display:flex;
flex-direction:row;
  max-width: 608px;
  width: 100%;
  height: 112px;
  background: var(--Text_White, #fff);
  padding: 24px 74px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom:24px;
  .lectureuploadtext{
    margin-top:17px;
    margin-left:8.5px;
    width:90px;
    margin-right: 1px;
    height:15px;
    color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .lectureuploadinput{
    width: 350px;
height: 48px;
flex-shrink: 0;
border-radius: 4px;
background: #EAEAEA;
margin-top:8px;
  }
`;

export const FileUploadWrapper = styled.div`
  display:flex;
  flex-direction:row;
  .fileuploadtext{
    margin-top:17px;
    margin-left:-10px;
    width:90px;
    margin-right: 27px;
    height:15px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  max-width: 608px;
  width: 100%;
  height: 112px;
  background: var(--Text_White, #fff);
  padding: 24px 74px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const UploadBox = styled.div`
  border-radius: 40px;
  border: 1px solid #E1E1E1;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  width: 404px;
  height:42px;
  margin-top:13px;
  justify-content: center;
  align-items: center;
  position: relative;
  .hiddenInput {
    color: var(--Main_light, #3730A3);
    font-family: Noto Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 152.941% */
    display: none;
  }
  .customFileUpload {
    color: var(--Main_light, #3730A3);
    font-family: Noto Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 152.941% */
    cursor: pointer;
  }
`;

export const UploadCancelBtn = styled.button`
  img {
    width: 16px;
    height: 19px;
    position: absolute;
    top: 12px;
    right: 16px;
    z-index: 5;
  }
`;
export const footer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-end;
padding-right:64px;
  width:100%;
  height:92px;
  border-top: 1px solid #E1E1E1;
background: #FFF;

/* header */
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  position:fixed;
  bottom:0;
  margin-left:-230px;
`;