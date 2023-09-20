import React, { useState } from "react";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import * as pdfjsLib from "pdfjs-dist/webpack";
import { Document, Page, pdfjs } from "react-pdf";

function PDFViewer() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar for thumbnails */}
      <div
        style={{
          overflowY: "scroll",
          width: "150px",
          borderRight: "1px solid gray",
        }}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={index + 1} onClick={() => setSelectedPage(index + 1)}>
            <Document
              file={file}
              renderMode="canvas"
              externalLinkTarget="_blank"
            >
              <Page pageNumber={index + 1} width={100} />
            </Document>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setFile(URL.createObjectURL(file));
            }
          }}
        />

        <div style={{ marginTop: "20px" }}>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={selectedPage} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
