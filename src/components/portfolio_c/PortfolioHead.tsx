import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar_c/Sidebar';
import SidebarContent from '../sidebar_c/SidebarContent';

const PortfolioHead: React.FC = () => {
    const navigate = useNavigate();
    const [showHeader, setShowHeader] = useState(false);
    const [fadeIn, setFadeIn] = useState(false); // 페이드인 상태
    const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치

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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > window.innerHeight * 0.85) {
                if (currentScrollY < lastScrollY) {
                    // 스크롤 업 -> Header 표시
                    setShowHeader(true);
                } else {
                    // 스크롤 다운 -> Header 숨김
                    setShowHeader(false);
                }
            } else {
                // 화면의 85% 이하로 스크롤 시 항상 Header 숨김
                setShowHeader(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <HeadWrapper className={showHeader ? 'visible' : ''}>
            <span className="mainLogo" onClick={goToPortfolio}>Portfolio</span>
            <Sidebar width={480} onToggle={handleSidebarToggle}>
                <SidebarContent fadeIn={fadeIn} />
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
    background-color: #4e7290;
    width: 100%;
    z-index: 9;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    color: white;

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
            color: #8AD0E7;
        }
    }
`;
