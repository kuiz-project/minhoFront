import React, { useState } from "react";
import uploadbtn from "../../assets/images/uploadButton.svg";
import cancel from "../../assets/images/cancel.svg";
import close from "../../assets/images/dir_close.svg";
import open from "../../assets/images/dir_open.svg";
import add from "../../assets/images/add.svg";
import trash from "../../assets/images/trash.svg";
import * as S from "./styles/index";

const Upload = () => {
  const initialDirectories = [
    {
      id: "dir1",
      name: "디렉토리명",
      isSelected: true,
      details: [
        { id: 1, name: "PDF 파일명 1" },
        { id: 2, name: "PDF 파일명 2" },
        { id: 3, name: "PDF 파일명 3" },
        { id: 4, name: "PDF 파일명 4" },
        { id: 5, name: "PDF 파일명 5" },
      ],
    },
    {
      id: "dir2",
      name: "디렉토리명",
      isSelected: true,
      details: [
        { id: 1, name: "PDF 파일명 1" },
        { id: 2, name: "PDF 파일명 2" },
        { id: 3, name: "PDF 파일명 3" },
        { id: 4, name: "PDF 파일명 4" },
        { id: 5, name: "PDF 파일명 5" },
      ],
    },
  ];

  // directory 배열
  const [directories, setDirectories] = useState(initialDirectories);

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

  return (
    <S.UploadWrapper>
      <section>
        <div className="section_header">
          <img src={trash} className="trash_button" alt="삭제 버튼" />
          <img src={add} className="add_button" alt="추가 버튼" />
        </div>
        <div className="section_lists">
          {directories.map((directory) => (
            <div className="directory" key={directory.id}>
              <div className="directory_top">
                <div onClick={() => handleDirectory(directory.id)}>
                  {directory.isSelected ? (
                    <img
                      src={close}
                      className="directory_image"
                      alt="닫기 이미지"
                    />
                  ) : (
                    <img
                      src={open}
                      className="directory_image2"
                      alt="열기 이미지"
                    />
                  )}
                </div>
                <div className="directory_name">{directory.name}</div>
              </div>
              {!directory.isSelected && (
                <div className="directory_details">
                  {directory.details.map((detail) => (
                    <div key={detail.id}>{detail.name}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="upload_mid_section">
        <div className="upload_mid_top">
          <div className="upload_name">강의명</div>
          <div className="upload_search">
            <div className="upload_top_search">
              <input className="search" type="text" placeholder="검색" />
            </div>

            <div className="search_list">
              <div className="search_list_boxes">마지막</div>
              <div className="search_list_boxes">과목과목</div>
              <div className="search_list_boxes">
                ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㄹㅇ
              </div>
              <div className="search_list_boxes">ㅇㅇㅇㅇㅇㅇㅇㅇ</div>
              <div className="search_list_boxes">ㄴㄴㄴ</div>
              <div className="search_list_boxes">ㄴㄴㄴ</div>
              <div className="search_list_boxes">ㄴㄴㄴ</div>
            </div>
          </div>
        </div>
        <div className="upload_mid_bottom">
          <div className="fileSelect">파일선택</div>
          <img src={uploadbtn} className="fileUpload" alt="업로드 버튼" />
          <img src={cancel} className="fileUploadCancel" alt="취소 버튼" />
        </div>
      </div>
      <div className="upload_right_section">
        <div className="kuiz_position_text">KUIZ 추천 포지션</div>
      </div>
    </S.UploadWrapper>
  );
};

export default Upload;
