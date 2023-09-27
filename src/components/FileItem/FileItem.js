import { useState } from "react";
import edit from "../../assets/images/edit.svg";
import * as S from "./styles/index";

const FileItem = ({ directories, setDirectories, directory, file }) => {
  // 파일 명
  const [text, setText] = useState(file.name);

  // (파일 클릭) 업로드 할 때는 전체 디렉토리에서 하나만 클릭 가능
  const handleFile = (dirId, fileId) => {
    const newDirectories = directories.map((dir) => {
      const newDetails = dir.details.map((file) => {
        if (dir.id === dirId && file.id === fileId) {
          return { ...file, isSelected: true };
        } else {
          return { ...file, isSelected: false, isEdit: false };
        }
      });
      return { ...dir, details: newDetails };
    });
    setDirectories(newDirectories);
  };

  // 파일명 수정
  const EditFileName = (dirId, fileId) => {
    const directory = directories.find((dir) => dir.id === dirId);

    if (directory) {
      // 해당 디렉토리 내에서 파일 찾기
      const file = directory.details.find((file) => file.id === fileId);

      if (file) {
        // 파일의 name 업데이트
        setText(file.name);
      }
    }

    const newDirectories = directories.map((dir) => {
      const newDetails = dir.details.map((file) => {
        if (dir.id === dirId && file.id === fileId) {
          return { ...file, isEdit: !file.isEdit, name: text };
        } else {
          return { ...file, isEdit: false };
        }
      });

      return { ...dir, details: newDetails };
    });
    setDirectories(newDirectories);
  };

  return (
    <S.FileItemWrapper
      onClick={() => handleFile(directory.id, file.id)}
      isSelected={file.isSelected}
    >
      {file.isEdit ? (
        <S.FileInput value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <S.FileName>{file.name}</S.FileName>
      )}
      <S.FileEditBtn
        onClick={(e) => {
          e.stopPropagation();
          EditFileName(directory.id, file.id);
        }}
      >
        {file.isEdit ? <span>확인</span> : <img src={edit} alt="수정 이미지" />}
      </S.FileEditBtn>
    </S.FileItemWrapper>
  );
};

export default FileItem;
