import React, { useEffect, useRef } from 'react';
import { styled } from '@linaria/react';
import NewTable from '../components/infomation_c/NewTable';
import { SchoolData, SocialData, AwardData, CertificateData } from '../components/infomation_c/NewTable';

const Information: React.FC = () => {
  const infoCellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, { threshold: 0.1 });

    const items = infoCellRef.current?.querySelectorAll('.InfoCell');
    items?.forEach(item => observer.observe(item));

    return () => {
      items?.forEach(item => observer.unobserve(item));
    };
  }, []);

  const schoolData: SchoolData[] = [
    { '재학기간': '2017.03-2020.02', '학교명': '보인고등학교', '전공 및 수료과정': '', '소재지': '서울 송파구' },
    { '재학기간': '2020.03-2025.02', '학교명': '가톨릭대학교 성심교정', '전공 및 수료과정': '컴퓨터정보공학부', '소재지': '부천시 원미구' },
  ];

  const socialData: SocialData[] = [
    { '활동기간': '2021.09-2022.07', '활동구분': '교내 창업동아리', '기관': '가톨릭대학교', '활동내용': '모바일 스마트팜 스타트업 창업동아리' },
    { '활동기간': '2023.07-2023.08', '활동구분': '포용성장 전문연구인력양성사업', '기관': 'KIRD, KIST', '활동내용': 'KIST 기관 내 연구보조' },
  ];

  const awardData: AwardData[] = [
    { '수상일자': '2021.05', '수상명': '아이디어 아이템전', '내용': '교내 아이디어 경진대회', '기관': '가톨릭대학교' },
    { '수상일자': '2024.07', '수상명': 'GDSC CUK Semi-hackaton 3rd', '내용': 'GDSC CUK에서 진행한 세미 해커톤으로, SDGs를 구글 기술을 활용하여 해결하는 방법을 찾는 주제로 진행.', '기관': 'GDSC CUK' }
  ];

  const certificateData: CertificateData[] = [
    { '취득일자': '2022.03.04', '자격증 및 면허': '컴퓨터활용능력', '급수 및 점수': '1급', '취득번호': '22-K9-018584', '발행기관': '대한상공회의소' },
    { '취득일자': '2023.06.09', '자격증 및 면허': '정보처리기사', '급수 및 점수': '', '취득번호': '23201010962F', '발행기관': '한국산업인력공단' },
  ];

  return (
    <>
      <InformationWrapper ref={infoCellRef}>
        <div className='InfoCell'>
          <span className='sectionTitle'>학력사항</span>
          <div className='TableWrapper'>
            <NewTable data={schoolData} />
          </div>
        </div>
        <div className='InfoCell'>
          <span className='sectionTitle'>사회경험</span>
          <div className='TableWrapper'>
            <NewTable data={socialData} />
          </div>
        </div>
        <div className='InfoCell'>
          <span className='sectionTitle'>수상경험</span>
          <div className='TableWrapper'>
            <NewTable data={awardData} />
          </div>
        </div>
        <div className='InfoCell'>
          <span className='sectionTitle'>자격사항 및 어학능력</span>
          <div className='TableWrapper'>
            <NewTable data={certificateData} />
          </div>
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
  

  .InfoCell {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    
    &.fade-in {
      opacity: 1;
    }
  }

  .sectionTitle {
    display: flex;
    position: relative;
    left: 10%;
    margin-bottom: 1.5%;
    font-size: 48px;
    font-weight: bold;
    font-family:"SCDream8";
  }

  .TableWrapper{
    max-width:1240px;
    margin:0 auto;
    margin-bottom: 3%;
    border-bottom:solid 1px #63949E;

    &:last-of-type{
      margin-bottom:none;
    }
  }
`;
