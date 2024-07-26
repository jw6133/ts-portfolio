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
          <PhotoBox>
            <img src="photo/human_main_face.jpg" alt="프로필 사진" />
          </PhotoBox>
          <div className="innerBox name">이름: 백지웅</div>
          <div className="innerBox birth">생년월일: 2001.06.13</div>
          <div className="innerBox sex">성별: 남자</div>
          <div className="innerBox email">이메일: jw6133@naver.com</div>
          <div className="innerBox phone">전화번호: 010-5102-3647</div>
          <div className="innerBox phone">집 전화번호: 00-000-0000</div>
          <div className="innerBox address">주소: 서울 광진구 광장동</div>
        </InnerWrapper>
      </WhiteBox>
    </>
  );
}

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5%;

  .innerBox {
    flex: 1 1 calc(50% - 10px);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #e0e0e0;
  }
`;

export const PhotoBox = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
