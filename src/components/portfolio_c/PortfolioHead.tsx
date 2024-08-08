import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar_c/Sidebar';
import SidebarContent from '../sidebar_c/SidebarContent';

const PortfolioHead: React.FC = () => {
    const navigate = useNavigate();
    const [showHeader, setShowHeader] = useState(false);

    const goToPortfolio = () => {
        navigate('/');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight*0.85) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeadWrapper className={showHeader ? 'visible' : ''}>
            <span className="mainLogo" onClick={goToPortfolio}>Portfolio</span>
            <Sidebar width={480}>
                <SidebarContent />
            </Sidebar>
        </HeadWrapper>
    );
};

export default PortfolioHead;

const HeadWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    background-color: gray;
    width: 100%;
    z-index: 9;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;

    &.visible {
        transform: translateY(0);
    }

    .mainLogo {
        height: 100%;
        font-size: 48px;
        line-height: 60px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            color: yellow;
        }
    }
`;
