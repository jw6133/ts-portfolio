import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Foot from '../components/Foot';
import PdfViewer from '../components/PdfViewer';

const Presentation: React.FC = () => {
    return (
        <>
            <Head />
            <PresentationWrapper>
                <span className="sectionTitle">주요 발표 자료</span>
                {/* react-pdf 뷰어 */}
                <PdfViewer />
            </PresentationWrapper>
            <Foot />
        </>
    );
};

export default Presentation;

const PresentationWrapper = styled.div`
    margin-top: 150px;
    .sectionTitle {
        display: flex;
        position: relative;
        left: 10%;
        margin-bottom: 3%;
        font-size: 48px;
        font-weight: bold;
    }
`;

const PreviewModal = styled.div`
    width: 100%;
    height: 100%;
    iframe {
        width: 100%;
        height: 700px;
    }
`;
