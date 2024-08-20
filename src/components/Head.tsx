import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar_c/Sidebar';
import SidebarContent from './sidebar_c/SidebarContent';

const Head: React.FC = () => {
    const [fadeIn, setFadeIn] = useState(false); // 페이드인 상태

    const navigate = useNavigate();
    
    const goToPortfolio = () => {
        navigate('/');
    }

    const handleSidebarToggle = (isOpen: boolean) => {
        if (isOpen) {
            setTimeout(() => setFadeIn(true), 200); // 사이드바가 열리고 200ms 후 페이드인 시작
        } else {
            setFadeIn(false); // 사이드바가 닫힐 때 페이드인 제거
        }
    };

    return (
        <HeadWrapper>
            <span className="mainLogo" onClick={goToPortfolio}>Portfolio</span>
            <Sidebar width={480} onToggle={handleSidebarToggle}>
                <SidebarContent fadeIn={fadeIn}/>
            </Sidebar>
        </HeadWrapper>
    );
};

export default Head;

const HeadWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    background-color: #4e7290;
    color:white;
    width: 100%;
    z-index: 3;
    .mainLogo {
        height: 100%;
        font-size: 48px;
        line-height: 60px;
        font-weight: bold;
        &:hover {
            color: #8AD0E7;
        }
    }
`;
