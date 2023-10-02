import React, { useEffect, useRef, useState } from "react";
import cancel from "../../assets/images/cancel.svg";
import close from "../../assets/images/dir_close.svg";
import open from "../../assets/images/dir_open.svg";
import add from "../../assets/images/add.svg";
import trash from "../../assets/images/trash.svg";
import search from "../../assets/images/search.svg";
import pdfuploadN from "../../assets/images/pdfupload_n.svg";
import * as S from "./styles/index";
import FileItem from "../../components/FileItem/FileItem";
import { useRecoilState } from "recoil";
import { currentPdfUrl, currentFile } from "./../../recoil/atom";

const Upload = () => {
  const [directoryName, setDirectoryName] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [pdfUrl, setPdfUrl] = useRecoilState(currentPdfUrl);
  const [fileState, setFileState] = useRecoilState(currentFile);

  // directory 배열
  const initialDirectories = [
    {
      id: "1",
      name: "디렉토리명",
      isSelected: false,
      isEdit: false,
      details: [
        { id: 1, name: "PDF 파일명 1", isSelected: false, isEdit: false },
        { id: 2, name: "PDF 파일명 2", isSelected: false, isEdit: false },
        { id: 3, name: "PDF 파일명 3", isSelected: false, isEdit: false },
        { id: 4, name: "PDF 파일명 4", isSelected: false, isEdit: false },
        { id: 5, name: "PDF 파일명 5", isSelected: false, isEdit: false },
      ],
    },
    {
      id: "2",
      name: "디렉토리명",
      isSelected: false,
      isEdit: false,
      details: [
        { id: 1, name: "PDF 파일명 1", isSelected: false, isEdit: false },
        { id: 2, name: "PDF 파일명 2", isSelected: false, isEdit: false },
        { id: 3, name: "PDF 파일명 3", isSelected: false, isEdit: false },
        { id: 4, name: "PDF 파일명 4", isSelected: false, isEdit: false },
        { id: 5, name: "PDF 파일명 5", isSelected: false, isEdit: false },
      ],
    },
  ];

  const fileInputRef = useRef(null);
  const [directories, setDirectories] = useState(initialDirectories);
  const [searchValue, setSearchValue] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); // 파일 이름

  // directory 클릭
  const handleDirectory = (dirId) => {
    const newDirectories = directories.map((directory) => {
      if (directory.id === dirId) {
        return { ...directory, isSelected: !directory.isSelected };
      }
      return directory;
    });
    setDirectories(newDirectories);
  };

  // 검색어
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <S.UploadWrapper>
      <S.SideBarWrapper>
        <S.SideBarHeader>
          <S.EditBtn>편집</S.EditBtn>
          <S.DeleteBtn>
            <img src={trash} alt="삭제 버튼" />
          </S.DeleteBtn>
          <S.AddBtn>
            <img src={add} alt="추가 버튼" />
          </S.AddBtn>
        </S.SideBarHeader>
        <S.SectionListBox>
          {directories.map((directory, idx) => (
            <S.DirBox key={directory.id}>
              <S.DirTitle isSelected={directories[idx].isSelected}>
                <S.ToggleBtn onClick={() => handleDirectory(directory.id)}>
                  {directory.isSelected ? (
                    <img src={open} alt="열기 이미지" />
                  ) : (
                    <img src={close} alt="닫기 이미지" />
                  )}
                </S.ToggleBtn>
                <S.DirName isSelected={directories[idx].isSelected}>
                  {directory.name}
                </S.DirName>
              </S.DirTitle>
              {directory.isSelected && (
                <S.DirInner>
                  {directory.details.map((file) => (
                    <FileItem
                      key={file.id}
                      directories={directories}
                      setDirectories={setDirectories}
                      directory={directory}
                      file={file}
                    ></FileItem>
                  ))}
                </S.DirInner>
              )}
            </S.DirBox>
          ))}
        </S.SectionListBox>

      </S.SideBarWrapper>
      <S.Wrapper>
        <S.LectureUploadWrapper>
          <S.LectureDirectoryWrapper>
            <div className="diruploadtext">디렉토리명</div>
            <div className="diruploadinput">
            <input 
              value={directoryName}
              style={{ width: '360px', height: '48px', border: 'none', borderRadius: '4px', background: '#EAEAEA' }}
              onChange={(e) => setDirectoryName(e.target.value)}
              placeholder="디렉토리명을 입력하세요"
            />
            </div>
            
          </S.LectureDirectoryWrapper>
          <S.LectureName>
            <div className="lectureuploadtext">강의명</div>
            <div className="lectureuploadinput">
            <input
              style={{ width: '360px', height: '48px', border: 'none', borderRadius: '4px', background: '#EAEAEA' }}
              value={lectureName}
              onChange={(e) => setLectureName(e.target.value)}
              placeholder="강의명을 입력하세요"
            />
            </div>
            
          </S.LectureName>
          <S.FileUploadWrapper>
            <div className="fileuploadtext">파일선택</div>
            <S.UploadBox>
              <input
                type="file"
                ref={fileInputRef}
                className="hiddenInput"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFile(URL.createObjectURL(file));
                    setFileState(file);
                    setPdfUrl(URL.createObjectURL(file));
                    setFileName(file.name);
                  }
                }}
              />

              <label
                className="customFileUpload"
                // 라벨을 클릭 => input 클릭
                onClick={() => fileInputRef.current.click()}
              >

                {fileName || "파일을 업로드 해주세요"}
              </label>
              <S.UploadCancelBtn
                onClick={() => {
                  setFile(null);
                  setFileName(null);
                }}
              >
                <img src={cancel} alt="취소 버튼" />
              </S.UploadCancelBtn>

            </S.UploadBox>

          </S.FileUploadWrapper>

        </S.LectureUploadWrapper>

        <S.footer>
        <img src={pdfuploadN} alt="pdf 업로드 전 버튼" />
    </S.footer>
      </S.Wrapper>
    
    </S.UploadWrapper>
  );
};

export default Upload;