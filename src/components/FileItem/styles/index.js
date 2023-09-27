import styled from "styled-components";

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
