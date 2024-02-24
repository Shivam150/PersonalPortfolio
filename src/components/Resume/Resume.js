import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDownloadPDF() {
    // Replace 'your-resume.pdf' with the actual URL or path to your PDF file.
    const pdfURL =  '../../images/Shivam_Singh_Resume1.0.pdf';

    // Create an invisible anchor element to trigger the download.
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'resume.pdf';
    link.click();
  }

  return (
    <div>
      <h1>Resume</h1>
      <Document
        file= '../../images/Shivam_Singh_Resume1.0.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={handleDownloadPDF}>Download Resume</button>
    </div>
  );
}

export default Resume;


// {`${process.env.BASE_URL}/Shivam_Singh_Resume1.0.pdf`}
// https://my-react-app.surge.sh