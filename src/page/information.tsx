import React from 'react';
import { styled } from '@linaria/react';
import NewTable from '../components/infomation_c/NewTable';

// NewTableData 타입 정의는 제거하고, NewTable.tsx에서 정의한 타입을 사용합니다.
import { SchoolData, SocialData, AwardData, CertificateData } from '../components/infomation_c/NewTable';


const Information: React.FC = () => {
  const schoolData: SchoolData[] = [
    { '재학기간': '2017.03-2020.02', '학교명': '보인고등학교', '전공 및 수료과정': '', '소재지': '서울 송파구' },
    { '재학기간': '2020.03-2025.02', '학교명': '가톨릭대학교 성심교정', '전공 및 수료과정': '컴퓨터정보공학부', '소재지': '부천시 원미구' },
  ];

  const socialData: SocialData[] = [
    { '활동기간': '2021.09-2022.07', '활동구분': '교내 창업동아리', '기관': '가톨릭대학교', '활동내용': '모바일 스마트팜 스타트업 창업동아리' },
    { '활동기간': '2023.07-2023.08', '활동구분': '포용성장 전문연구인력양성사업', '기관': 'KIRD, KIST', '활동내용': 'KIST 기관 내 연구보조' },
    { '활동기간': '2021.09-2022.07', '활동구분': '교내 창업동아리', '기관': '가톨릭대학교', '활동내용': '모바일 스마트팜 스타트업 창업동아리' }
  ];

  const awardData: AwardData[] = [
    { '수상일자': '2021.05', '수상명': '아이디어 아이템전', '내용': '교내 아이디어 경진대회', '기관': '가톨릭대학교' },
    { '수상일자': '2024.07', '수상명': 'GDSC CUK Semi-hackaton 3rd', '내용': 'GDSC CUK에서 진행한 세미 해커톤으로, SDGs를 구글 기술을 활용하여 해결하는 방법을 찾는 주제로 진행.', '기관': 'GDSC CUK' }
  ];

  const certificateData: CertificateData[] = [
    { '취득일자': '2022.03.04', '자격증 및 면허': '컴퓨터활용능력', '급수 및 점수': '1급', '취득번호': '22-K9-018584', '발행기관': '대한상공회의소' },
    { '취득일자': '2023.06.09', '자격증 및 면허': '정보처리기사', '급수 및 점수': '', '취득번호': '23201010962F', '발행기관': '한국산업인력공단' },
    { '취득일자': '2023.05.28', '자격증 및 면허': 'TOEIC', '급수 및 점수': '825', '취득번호': '138226', '발행기관': 'ETS' },
    { '취득일자': '2021.02.10', '자격증 및 면허': '자동차운전면허증', '급수 및 점수': '2종 보통', '취득번호': '11-21-804581-50', '발행기관': '서울특별시경찰청' }
  ];

  return (
    <>
      <InformationWrapper>
        <span className='sectionTitle'>학력사항</span>
        <div className='TableWrapper'>
          <NewTable data={schoolData} />
        </div>
        <span className='sectionTitle'>사회경험</span>
        <div className='TableWrapper'>
          <NewTable data={socialData} />
        </div>
        <span className='sectionTitle'>수상경험</span>
        <div className='TableWrapper'>
          <NewTable data={awardData} />
        </div>
        <span className='sectionTitle'>자격사항 및 어학능력</span>
        <div className='TableWrapper'>
          <NewTable data={certificateData} />
        </div>
      </InformationWrapper>
    </>
  );
};

export default Information;

export const InformationWrapper = styled.div`
  width: 100%;
  justify-content: center;
  padding: 60px 0;
  background-color: transparent;
  border-radius: 8px;
  max-width: 1600px;
  margin: 0 auto;
  .sectionTitle {
    display: flex;
    position: relative;
    left: 10%;
    margin-bottom: 3%;
    font-size: 48px;
    font-weight: bold;
  }
  .TableWrapper{
    max-width:1240px;
    margin:0 auto;
    margin-bottom: 3%;
    border-bottom:solid 1px black;
    &:last-of-type{
      margin-bottom:none;
    }
  }
`;
