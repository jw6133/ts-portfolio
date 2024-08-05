import React from 'react';
import Head from '../components/Head';
import { styled } from '@linaria/react';
import MainSwiper from '../components/portfolio_c/MainSwiper';
import PortfolioCell from '../components/portfolio_c/PortfolioCell';
import Foot from '../components/Foot';
import First from './First';

const Portfolio: React.FC = () => {
    return (
        <>  
            <First/>
            <PortfolioWrapper>
                <Head />
                <MainSwiper />
                <CellWrapper>
                    <PortfolioCell />
                </CellWrapper>
                <Foot />
            </PortfolioWrapper>
        </>
    );
};

export default Portfolio;

const PortfolioWrapper = styled.div`
    margin-top:110vh;
`;

const CellWrapper = styled.div`

`;