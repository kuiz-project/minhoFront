import styled from "styled-components";

export const ButtonsBox = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
`;

export const CurrentPage = styled.div``;

export const PdfWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const PdfViewWrapper = styled.div`
  width: 100%;
  margin: 30px auto;
`;

export const PdfListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PdfView = styled.canvas`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background: var(--Text_White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ViewBox = styled.div``;

export const ThumbnailsBox = styled.div`
  width: 13%;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
