import React, { useCallback, useEffect, useRef, useState } from "react";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import * as pdfjsLib from "pdfjs-dist/webpack";
import * as S from "./styles/index";
import { currentFile, currentPdfUrl } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { Document, Page } from "react-pdf";
const Pdf = () => {
  // canvas를 참조할 Ref
  const canvasRef = useRef();

  // 현재 참조하고 있는 pdf주소
  const [pdfUrl, setPdfUrl] = useRecoilState(currentPdfUrl);
  const [fileState, setFileState] = useRecoilState(currentFile);

  // workerSrc의 속성 지정
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // pdf정보(메인)
  const [pdfRef, setPdfRef] = useState();

  // pdf를 페이지에 렌더링
  const renderPage = useCallback(
    (pageNum, pdf = pdfRef) => {
      pdf &&
        pdf.getPage(pageNum).then(function (page) {
          // 조회할 화면의 크기(스케일은 화질을 나타내는 듯)
          const viewport = page.getViewport({ scale: 1 });
          // canvas를 이용하여 렌더링
          const canvas = canvasRef.current;
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: canvas.getContext("2d"),
            viewport: viewport,
          };
          page.render(renderContext);
        });
    },
    [pdfRef]
  );

  // 페이지 이동
  const nextPage = () =>
    pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  useEffect(() => {
    renderPage(currentPage, pdfRef);
  }, [pdfRef, currentPage, renderPage]);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then(
      (loadedPdf) => {
        setPdfRef(loadedPdf);
      },
      function (reason) {
        console.error(reason);
      }
    );
  }, [pdfUrl]);

  return (
    <S.PdfWrapper>
      <S.PdfListWrapper>
        <S.Button onClick={prevPage}>이전 페이지</S.Button>
        <S.Button onClick={nextPage}>다음 페이지</S.Button>
      </S.PdfListWrapper>
      <S.PdfViewWrapper>
        <S.PdfView ref={canvasRef}></S.PdfView>
      </S.PdfViewWrapper>
    </S.PdfWrapper>
  );
};

export default Pdf;
