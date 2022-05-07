import React, { useState } from 'react';
import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SinglePage = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setNumPages(1);
    }

    const changePage = (offset) => {
        setPageNumber(previousPageNumber => pageNumber + offset);
    }

    const previousPage = () => {
        changePage(-1);
    }

    const nextPage = () => {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <div className='w-100 '>
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
                className='PDFDocument '

            >
                <Page className='PDFPage ' pageNumber={pageNumber} renderTextLayer={false} renderInteractiveForms={false}/>
            </Document>
            <div className='d-none'>
                <p>
                    Page {pageNumber || (numPages ? 1: "--")} of {numPages || "--"} 
                </p>
                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
                </button>
                <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default SinglePage