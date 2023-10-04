import * as S from "./styles/index";
import { Viewer, Worker } from "@react-pdf-viewer/core/lib";
import {
  defaultLayoutPlugin,
  BookmarkIcon,
  FileIcon,
  ThumbnailIcon,
  SidebarTab,
} from "@react-pdf-viewer/default-layout";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { currentFileState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
const Pdf = () => {
  // 썸네일 플러그인 설정(width 조정)

  const thumbnailPluginInstance = thumbnailPlugin({
    thumbnailWidth: 204,
    thumbnailHeight: 124,
  });
  const { Thumbnails } = thumbnailPluginInstance;

  const [viewpdf, setViewpdf] = useState(null);
  const [currentFile, setCurrentFile] = useRecoilState(currentFileState);
  // <>
  //   {props.pageIndex + 1}
  //   {props.pageLabel !== `${props.pageIndex + 1}` && `(${props.pageLabel})`}
  // </>
  useEffect(() => {
    if (currentFile !== null) {
      setViewpdf(currentFile);
    } else {
      setViewpdf(null);
    }
  }, []);

  const handlerPagePage = (e) => {
    console.log(e.currentPage);
  };

  return (
    <S.PdfWrapper>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <S.ThumbnailsBox>
          <Thumbnails />
        </S.ThumbnailsBox>
        {viewpdf && (
          <Viewer
            fileUrl={viewpdf}
            plugins={[thumbnailPluginInstance]}
            onPageChange={handlerPagePage}
            className="viewer"
            style={{ overflow: "auto" }}
          />
        )}
        {/* {!viewpdf && <>No PDF</>} */}
      </Worker>
    </S.PdfWrapper>
  );
};

export default Pdf;
