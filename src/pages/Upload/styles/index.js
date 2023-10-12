import styled from "styled-components";

export const UploadWrapper = styled.div`
  width: 100%;
  section::-webkit-scrollbar {
    display: none;
  }
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

export const DirInput = styled.input`
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#424242")};
  font-size: 14px;
  font-family: "Noto Sans KR_Medium";
`;

export const SideBarWrapper = styled.section`
  position: fixed;
  top: 100px;
  z-index: 998;
  height: 100%;
  width: 234px;
`;

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

export const DirBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const EditBtn = styled.button`
  color: #555;
  font-size: 16px;
  font-weight: 350;
  z-index: 10;
`;

export const CompleteBtn = styled.button`
  color: #555;
  font-size: 16px;
  font-weight: 350;
  z-index: 10;
`;
export const DeleteBtn = styled.button`
  color: #555;
  font-size: 16px;
  font-weight: 350;
  z-index: 10;
`;

export const AddBtn = styled.button`
  color: #555;
  font-size: 16px;
  font-weight: 350;
  z-index: 10;
`;

export const DirInner = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const LectureUploadWrapper = styled.section`
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  margin-top: 161px;
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

export const LectureWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 364px;
  background: var(--Text_White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  gap: 55px;
  position: relative;
  padding: 28px 140px 16px 58px;
  overflow: scroll;
  // webkit 렌더링 엔진에서 스크롤 바 숨기기
  &::-webkit-scrollbar {
    /* This is the magic bit for WebKit */
    display: none;
  }
`;

export const UploadName = styled.span`
  padding-top: 10px;
  color: #000;
  font-family: Noto Sans KR_Medium;
  font-size: 20px;
`;

export const UploadSearch = styled.span`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
`;

export const UploadTopSearch = styled.span`
  border-radius: 62px;
  height: 48px;
  width: 400px;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  background-color: white;
  img {
    position: absolute;
    padding: 8px 16px;
  }
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 50px;
  display: flex;
  background: var(--Gray_3, #f9f9f9);
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 50px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const SearchList = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SearchItem = styled.button`
  height: 45px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  color: var(--Text_Gray, #a3a3a3);
  font-size: 18px;
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

export const FileUploadWrapper = styled.div`
  max-width: 712px;
  width: 100%;
  height: 84px;
  border-radius: 16px;
  align-items: center;
  background: var(--Text_White, #fff);
  padding: 24px 74px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const UploadBox = styled.div`
  border-radius: 40px;
  border: 1px solid #312e81;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  position: relative;
  .hiddenInput {
    color: var(--Main_light, #3730a3);
    font-family: Noto Sans KR_Bold;
    font-size: 16px;
  }
  .customFileUpload {
    color: var(--Main_light, #3730a3);
    font-family: Noto Sans KR_Bold;
    font-size: 16px;
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

export const FileInput = styled.input`
  color: #424242;
  width: 85%;
  font-size: 14px;
  border: none;
  outline: none;
  background: none;
  padding: 0;
`;

export const FileItemWrapper = styled.button`
  padding: 10px 10px 10px 34px;
  height: 32px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: ${({ isSelected }) => (isSelected ? `#e3e6f2` : `#fff`)};
`;

export const FileName = styled.span`
  color: #424242;
  font-size: 14px;
`;

export const FileEditBtn = styled.button`
  span {
    font-size: 13px;
  }
`;

export const ViewWrapper = styled.div``;
