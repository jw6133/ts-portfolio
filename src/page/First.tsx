import { styled } from '@linaria/react';
import React, { useEffect, useState } from 'react';
// icon
import { SiGithub } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { SiVelog } from "react-icons/si";
// css
import "../style/font.css";

type FirstProps = {};

export default function First(props: FirstProps) {
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [fadeOutTitle, setFadeOutTitle] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowStep1(true), 500);  // 0.5초 후 첫 번째 텍스트 표시
    const timer2 = setTimeout(() => setShowStep2(true), 1500); // 1.5초 후 두 번째 텍스트 표시
    const timer3 = setTimeout(() => setFadeOutTitle(true), 3000); // 3초 후 텍스트 opacity 낮춤
    const timer4 = setTimeout(() => setShowText1(true), 4500);
    const timer5 = setTimeout(() => setShowText2(true), 5000);
    const timer6 = setTimeout(() => setShowText3(true), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // 100vh 아래로 이동
      behavior: 'smooth', // 부드럽게 이동
    });
  };
  return (
    <>
      <FirstWrapper>
        <MainWrapper>
          <>
            <div className='mTitle'>
              {showStep1 && <p className={`main-title ${fadeOutTitle ? 'fade-out' : 'fade-slide'}`}>Front-end</p>}
              {showStep2 && <p className={`main-title ${fadeOutTitle ? 'fade-out' : 'fade-slide'}`}>Developer</p>}
            </div>
            <div className='mText'>
              {showText1 && <p className='main-text mte1 fade-in'>적응하는 개발자.</p>}
              {showText2 &&<p className='main-text mte2 fade-in'>백지웅입니다 :)</p>}
              {showText3 &&<p className='main-text mte3 fade-in'>프론트엔드 개발자를 목표로 노력중인 백지웅입니다.</p>}
            </div>
          </>
          
        </MainWrapper>

        <ButtonWrapper>
          <button className="git-btn linkBtn" onClick={() => window.open('https://github.com/jw6133')}>
            <SiGithub />
          </button>
          <button className="insta-btn linkBtn" onClick={() => window.open('https://www.instagram.com/baack_g/')}>
            <FaInstagram />
          </button>
          <button className='velog-btn linkBtn' onClick={()=> window.open('https://velog.io/@fastturtle/posts')}>
            <SiVelog/>
          </button>
        </ButtonWrapper>
        <div className='down-arrow' onClick={scrollToNextSection}>
          <MdKeyboardDoubleArrowDown />
        </div>
      </FirstWrapper>
    </>
  );
}

const FirstWrapper = styled.div`
  z-index: -999;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  color: white;
  background-image: url('./firstphoto/first4.jpg');
  background-size: cover; /* 이미지 크기 설정 */
  background-position: center; /* 이미지 위치 설정 */

  /* Add an overlay */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -998;
  }

  .down-arrow {
    position: absolute;
    bottom: 3%;
    width: 100%;
    text-align: center;
    font-size: 36px;
    cursor: pointer;
    animation: bounce 0.8s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

const MainWrapper = styled.div`
  position: relative;
  z-index: -997;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* 부모 컨테이너의 전체 높이를 차지 */
  text-align: center; /* 텍스트 가운데 정렬 */

  .main-title {
  font-family: "SCdream8";
  font-size: 200px;
  opacity: 0.5;
  animation: slideIn 1s forwards;
  transition: opacity 1s ease-in-out;
  z-index: 1; /* Increased z-index */
}
  .mTitle{
    position:absolute;
    top:20%;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(-100%); /* 왼쪽에서 시작 */
      opacity: 0;
    }
    100% {
      transform: translateX(0); /* 중앙으로 슬라이드 */
      opacity: 1;
    }
  }
  .fade-out {
    color:rgba(255, 255, 255, 0.3);
    transition: color 1s ease-in-out; /* 트랜지션 추가 */
  }

  .mText {
    position:absolute;
    top:38%;
    width:1000px;
    height:200px;
  }
  .main-text {
    font-family: "goorm-bold";
    font-size: 36px;
    opacity: 0;
    margin-top:1.5%;
    &:first-of-type{
      margin-top:0px;
    }
  }
  .fade-in {
    animation: fadeIn 1s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const ButtonWrapper = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  display: flex;
  gap: 10px;
  z-index: -997; /* Ensure buttons are above the overlay */

  .linkBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    font-size: 50px;
    color: white;
    background: none;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid white;

    &:before {
      content: '';
      transition: 200ms;
      width: 0px;
      height: 0px;
      display: block;
      position: absolute;
      top: 0px;
      right: 0px;
      border-right: solid 3px white;
      border-bottom: solid 3px white;
      opacity: 0;
      box-sizing: border-box;
    }

    &:hover:before {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: height 200ms, width 200ms 200ms;
    }

    &:after {
      content: '';
      transition: 200ms;
      width: 0px;
      height: 0px;
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0px;
      border-left: solid 4px white;
      border-top: solid 4px white;
      opacity: 0;
      box-sizing: border-box;
    }

    &:hover:after {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: opacity 0ms 400ms, height 200ms 400ms, width 200ms 600ms;
    }
  }
`;
