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
  const [showStep3, setShowStep3] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowStep1(true), 500);  // 0.5초 후 첫 번째 텍스트 표시
    const timer2 = setTimeout(() => setShowStep2(true), 1500); // 1.5초 후 두 번째 텍스트 표시
    const timer3 = setTimeout(() => setShowStep3(true), 2500); // 2.5초 후 세 번째 텍스트 표시

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <FirstWrapper>
        <MainWrapper>
          {showStep1 && <p className='main-title fade-in'>적응하는 개발자.</p>}
          {showStep2 && <p className='main-title fade-in'>백지웅입니다 :)</p>}
          {showStep3 && (
            <>
              <p className='main-text fade-in'>프론트엔드 개발자를 목표로 노력중인 백지웅입니다.</p>
              <p className='main-text fade-in'>변화무쌍한 프론트엔드 환경에서 적응하기 위해 최신 기술들을 기록하고 습득합니다.</p>
              <p className='main-text fade-in'>남들과 지식을 나누며 새로운 기술을 배우고 자신의 기술을 확고히 하기 위해 노력합니다.</p>
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
  z-index: 999;
  background-color: #0093ED;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  color: white;

  .down-arrow {
    position: absolute;
    bottom: 3%;
    width: 100%;
    text-align: center;
    font-size: 36px;
  }
`;

const MainWrapper = styled.div`
  .main-title {
    font-family: "SCdream8";
    width: 100%;
    font-size: 50px;
    text-align: center;
    margin: 4% auto;
    opacity: 0;
    animation: fadeIn 1s forwards;
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

  .linkBtn {
    display: flex; /* 추가 */
    justify-content: center; /* 추가 */
    align-items: center; /* 추가 */
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
      border-right: solid 4px white;
      border-bottom: solid 4px white;
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
