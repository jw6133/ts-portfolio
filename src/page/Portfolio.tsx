import React, { useRef, useEffect } from 'react';
import { styled } from '@linaria/react';
import MainSwiper from '../components/portfolio_c/MainSwiper';
import PortfolioCell from '../components/portfolio_c/PortfolioCell';
import Foot from '../components/Foot';
import First from './First';
import PortfolioHead from '../components/portfolio_c/PortfolioHead';
import SkillsSection from '../components/portfolio_c/SkillsSection';
import Information from './information';
import Resume from './Resume';

const Portfolio: React.FC = () => {
    return (
        <>  
            <First/>
            <PortfolioWrapper>
                <PortfolioHead />
                <MainSwiper />
                <SkillsSection/>
                <CellWrapper>
                    <PortfolioCell />
                </CellWrapper>
                <Information/>
                <Resume/>
                <Foot />
            </PortfolioWrapper>
        </>
    );
};

export default Portfolio;

const PortfolioWrapper = styled.div`
    margin-top: 100vh; /* First 컴포넌트의 높이만큼 마진 추가 */
    position: relative; //다른 컴포넌트들이 First를 덮어쓰도록 설정
`;

const CellWrapper = styled.div`
    transition: opacity 1s;

    &.fade-in {
        opacity: 1;
    }
`;
