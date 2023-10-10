import React, { useEffect, useRef, useState } from "react";
import cancel from "../../assets/images/cancel.svg";
import close from "../../assets/images/dir_close.svg";
import open from "../../assets/images/dir_open.svg";
import add from "../../assets/images/add.svg";
import trash from "../../assets/images/trash.svg";
import search from "../../assets/images/search.svg";
import * as S from "./styles/index";
import FileItem from "../../components/FileItem/FileItem";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentFileState } from "../../recoil/atom";

const Upload = () => {
  const [pdfFile, setpdfFile] = useState(null);

  const [currentFile, setCurrentFile] = useRecoilState(currentFileState);
  const navigate = useNavigate();

  const fileType = ["application/pdf"];

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
  const [directories, setDirectories] = useState(initialDirectories);
  const [searchValue, setSearchValue] = useState("");

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

  const handleChange = (e) => {
    console.log("pdf");
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setpdfFile(e.target.result);
          setCurrentFile(e.target.result);
          console.log("pdf");
          navigate("/pdf");
        };
      } else {
        setpdfFile(null);
      }
    } else {
      console.log("please select");
    }
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
      <S.LectureUploadWrapper>
        <S.LectureWrapper>
          <S.UploadName>강의명</S.UploadName>
          <S.UploadSearch>
            <S.UploadTopSearch>
              <img src={search} alt="검색 이미지" />
              <S.SearchInput
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="강의명을 입력하세요"
              />
            </S.UploadTopSearch>
            <S.SearchList>
              <S.SearchItem>마지막</S.SearchItem>
              <S.SearchItem>마지막123213</S.SearchItem>
              <S.SearchItem>마지막</S.SearchItem>
            </S.SearchList>
          </S.UploadSearch>
        </S.LectureWrapper>
        <S.FileUploadWrapper>
          <S.UploadBox>
            <input
              type="file"
              className="hiddenInput"
              onChange={handleChange}
            />
            <S.UploadCancelBtn>
              <img src={cancel} alt="취소 버튼" />
            </S.UploadCancelBtn>
          </S.UploadBox>
        </S.FileUploadWrapper>
      </S.LectureUploadWrapper>
    </S.UploadWrapper>
  );
};

export default Upload;
