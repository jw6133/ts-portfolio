import React, { useRef, useEffect } from 'react';
import Head from '../components/Head';
import { styled } from '@linaria/react';
import MainSwiper from '../components/portfolio_c/MainSwiper';
import PortfolioCell from '../components/portfolio_c/PortfolioCell';
import Foot from '../components/Foot';
import First from './First';

const Portfolio: React.FC = () => {
    const cellWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in');
                }
            });
        });

        if (cellWrapperRef.current) {
            observer.observe(cellWrapperRef.current);
        }

        return () => {
            if (cellWrapperRef.current) {
                observer.unobserve(cellWrapperRef.current);
            }
        };
        const handleScroll = () => {
            if (cellWrapperRef.current) {
                const { top, bottom } = cellWrapperRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top < windowHeight && bottom > 0) {
                    cellWrapperRef.current.classList.add('fade-in');
                } else {
                    cellWrapperRef.current.classList.remove('fade-in');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>  
            <First/>
            <PortfolioWrapper>
                <Head />
                <MainSwiper />
                <CellWrapper ref={cellWrapperRef}>
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
    opacity: 0;
    transition: opacity 1s;

    &.fade-in {
        opacity: 1;
    }
`;

// Fade-in animation style
const fadeInStyle = `
    .fade-section {
        opacity: 0;
        transition: opacity 1s;
    }

    .fade-in {
        opacity: 1;
    }
`;

// Append fade-in styles to the document head
document.head.insertAdjacentHTML('beforeend', `<style>${fadeInStyle}</style>`);
