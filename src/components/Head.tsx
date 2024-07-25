import React from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar_c/Sidebar';
import SidebarContent from './sidebar_c/SidebarContent';

const Head: React.FC = () => {

    const navigate = useNavigate();

    const goToPortfolio = () => {
        navigate('/');
    }

    return (
        <HeadWrapper>
            <span className="mainLogo" onClick={goToPortfolio}>Portfolio</span>
            <Sidebar width={480}>
                <SidebarContent />
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
    background-color: gray;
    width: 100%;
    z-index: 3;
    .mainLogo {
        height: 100%;
        font-size: 48px;
        line-height: 60px;
        font-weight: bold;
        &:hover {
            color: yellow;
        }
    }
`;
