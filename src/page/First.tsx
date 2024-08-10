import { styled } from '@linaria/react';
import React, { useEffect, useState } from 'react';
// icon
import { SiGithub } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// css
import "../style/font.css";

type FirstProps = {};

export default function First(props: FirstProps) {
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [shrinkText, setShrinkText] = useState(false);
  const [showRemainingText, setShowRemainingText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowStep1(true), 500);  // 0.5초 후 첫 번째 텍스트 표시
    const timer2 = setTimeout(() => setShowStep2(true), 1500); // 1.5초 후 두 번째 텍스트 표시
    const timer3 = setTimeout(() => setShrinkText(true), 3000); // 3초 후 텍스트 축소 및 fade 처리
    const timer4 = setTimeout(() => setShowRemainingText(true), 4500); // 4.5초 후 나머지 텍스트 표시

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <FirstWrapper>
        <MainWrapper>
          {showStep1 && <p className={`main-title ${shrinkText ? 'shrink' : 'fade-slide'}`}>Front-end</p>}
          {showStep2 && <p className={`main-title ${shrinkText ? 'shrink' : 'fade-slide'}`}>Developer</p>}
          {showRemainingText && (
            <>
              <p className='main-text fade-in'>적응하는 개발자.</p>
              <p className='main-text fade-in'>백지웅입니다 :)</p>
              <p className='main-text fade-in'>프론트엔드 개발자를 목표로 노력중인 백지웅입니다.</p>
            </>
          )}
        </MainWrapper>

        <ButtonWrapper>
          <button className="git-btn linkBtn" onClick={() => window.open('https://github.com/jw6133')}>
            <SiGithub />
          </button>
          <button className="insta-btn linkBtn" onClick={() => window.open('https://www.instagram.com/baack_g/')}>
            <FaInstagram />
          </button>
        </ButtonWrapper>
        <div className='down-arrow'><MdKeyboardDoubleArrowDown /></div>
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
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    z-index: -998;
  }

  .down-arrow {
    position: absolute;
    bottom: 3%;
    width: 100%;
    text-align: center;
    font-size: 36px;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  z-index: -997; /* 텍스트가 오버레이 위에 위치하도록 함 */

  .main-title {
    font-family: "SCdream8";
    width: 100%;
    font-size: 50px;
    text-align: center;
    margin: 4% auto;
    opacity: 0;
    animation: slideIn 2s forwards; /* 슬라이드 인 애니메이션 */
    transition: all 2s ease-in-out; /* 축소 애니메이션을 위한 트랜지션 추가 */
  }

  .shrink {
    transform: scale(0.5); /* 크기 줄임 */
    opacity: 0.6; /* 불투명도 줄임 */
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

  .main-text {
    font-family: "goorm-bold";
    font-size: 36px;
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s forwards;
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
