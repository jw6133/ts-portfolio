import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@linaria/react';

//icon
import { LuClipboardList } from "react-icons/lu";
import { FaRegAddressBook } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiPresentationLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import ToggleTheme from './ToggleTheme';

interface SidebarContentProps {
  fadeIn: boolean; // 페이드인 여부를 나타내는 prop
}

const SidebarContent: React.FC<SidebarContentProps> = ({ fadeIn }) => {

    const navigate = useNavigate();

    const goToPortfolio = () => {
        navigate('/');
    }
    const goToInfo = () => {
        navigate('/info');
    }
    const goToPPT = () => {
        navigate('/ppt');
    }
    const goToResume = () => {
        navigate('/resume');
    }
    const goToAdmin = () => {
        navigate('/admin');
    }

    return (
        <SideContentWrapper className={fadeIn ? 'fade-in' : ''}>
            <div className='sideHead'>
                <img className='face-photo' src='/photo/main_human_face.jpg' alt='내 얼굴' />
                <span className='name'>백지웅</span>
                <span className='status'>가톨릭대학교 컴퓨터정보공학부</span>
            </div>

            <div className='sideMenu'>
                <ul>
                    <li onClick={goToPortfolio}><span className='icon40'><LuClipboardList /></span> <span className='sideText'>포트폴리오 리스트</span></li>
                    <li onClick={goToInfo}><span className='icon40'><FaRegAddressBook /></span> <span className='sideText'>세부정보</span></li>
                    <li onClick={goToResume}><span className='icon40'><IoDocumentTextOutline /></span> <span className='sideText'>이력서</span></li>
                    <li onClick={goToPPT}><span className='icon40'><RiPresentationLine /></span> <span className='sideText'>주요 발표 자료</span></li>
                </ul>
            </div>
            <span className='toggleWrapper'><ToggleTheme /></span>

            <button className='admin' onClick={goToAdmin}><span className='icon30'><GrUserAdmin /></span></button>
        </SideContentWrapper>
    );
};

export default SidebarContent;

const SideContentWrapper = styled.div`
    position:relative;
    color:white;
    background-color:rgba(94,94,94,0.7);
    height:110vh;
    .sideHead{
        margin-top:6%;
        position:relative;
        display:flex;
        .face-photo{
            display:flex;
            position:relative;
            width:150px;
            height:150px;
            border-radius:50%;
            margin-left:40px;
            margin-top:40px;
        }
        .name{
            display:inline-block;
            position:absolute;
            width:50%;
            right:-1%;
            top:35%;
            font-size:48px;
            border:none;
        }
        .status{
            display:flex;
            position:absolute;
            right:10%;
            top:75%;
        }
        margin-bottom:8%;
    }
    .sideMenu{
        display:flex;
        color:white;
        width:100%;
        ul{
            margin:10% auto 0;
            display:flex;
            gap : 30px;
            flex-direction:column;
            li{
                display:flex;
                gap:50px;
                height:40px;
                line-height:40px;
                &:hover{
                        color:yellow;
                    }
                .sideText{
                    font-size:24px;
                }
                .icon40{
                    font-size:40px;
                }
            }
        }
    }
    .slideBtn{
        display:flex;
        position: absolute;
        bottom:20%;
        right:-10%;
        background-color:#5e5e5e;
        width:100%;
    }
    .admin{
        color:white;
        display:flex;
        position:absolute;
        bottom:15%;
        right:5%;
        .icon30{
            font-size:30px;
        }
        &:hover{
            color:yellow;
        }
    }
    .toggleWrapper{
        width:200px;
        height:64px;
        position:relative;
        bottom:80px;
        left:560px;
    }
    &.fade-in {
    animation: fadeIn 0.7s forwards;
    }
    @keyframes fadeIn {
    from {
        background-color:rgba(94,94,94,0.7);
    }
    to {
        background-color:rgba(94,94,94,1);
    }
  }
`;
