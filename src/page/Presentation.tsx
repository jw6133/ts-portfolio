import React from 'react';
import { styled } from '@linaria/react';
import PdfViewer from '../components/PdfViewer';

const Presentation: React.FC = () => {
    return (
        <>
            <PresentationWrapper>
                <span className="sectionTitle">주요 발표 자료</span>
                {/* react-pdf 뷰어 */}
                <PdfViewer />
            </PresentationWrapper>
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
