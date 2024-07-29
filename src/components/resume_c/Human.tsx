import React from 'react';
import { styled } from '@linaria/react';
import { WhiteBox } from '../../page/Resume';
import './resume_css/Human.css';

type HumanProps = {};

export default function Human(props: HumanProps) {
  return (
    <>
      <span className="sectionName">인적사항</span>
      <WhiteBox>
        <InnerWrapper>
          <FirstRow>
            <div className="name">이름: 백지웅</div>
            <div className="birth">생년월일: 2001.06.13</div>
            <div className="sex">성별: 남자</div>
            <div className="email">이메일: jw6133@naver.com</div>
          </FirstRow>
          <SecondRow>
            <div className="phone">전화번호: 010-5102-3647</div>
            <div className="phone2">집 전화번호: 00-000-0000</div>
            <div className="address">주소: 서울 광진구 광장동</div>
          </SecondRow>
          <PhotoBox>
            <img src="photo/main_human_face.jpg" alt="프로필 사진" />
          </PhotoBox>
        </InnerWrapper>
      </WhiteBox>
    </>
  );
}
export const InnerWrapper = styled.div`
  max-width:930px;
  position: relative;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  margin:0 auto;
  margin-bottom: 20px;
`;

export const FirstRow = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px; 
`;

export const SecondRow = styled.div`
  width: 100%;
  justify-content: space-between;
`;

export const PhotoBox = styled.div`
  position: absolute;
  right: 0;
  top:0;
  padding: 10px;
  border: 1px solid #e0e0e0;
  width: 100px; ///max 해야함.
  height: 130px;
`;

