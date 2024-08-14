import React, { useEffect, useRef } from 'react';
import PortfolioCellSRC from './PortfolioCellSRC';
import { styled } from '@linaria/react';

interface ImageData {
    src: string;
    category: string;
    headText: string;
    bodyText: string;
    alt: string;
}

const PortfolioCell: React.FC = () => {
    const imageList: ImageData[] = [
        { src: 'ProjectThumbnail/chull.jpg', category: '프로젝트', headText: '컴퓨터네트워크 - 출석부',
            bodyText: '교내 강의인 컴퓨터네트워크 과목에서 소켓 통신을 구현하고자 Visual Studio의 MFC앱을 활용하여 출석부 시스템을 구현한 프로젝트',
            alt: 'Chull' },
        { src: 'ProjectThumbnail/farmfarm.jpg', category: '대외활동', headText: '창업동아리 - 팜팜', 
            bodyText: '교내 강의인 스타트업어드벤처디자인 과목에서 구성된 창업동아리로, 모바일 앱과 연동된 스마트팜 시스템을 구축하여 직접 농장에 가지 않아도 자신의 작물을 관리할 수 있는 서비스', alt: 'Farm Farm' },
        { src: 'ProjectThumbnail/KIST.jpg', category: '대외활동', headText: '포용성장 전문인력양성사업 - KIST', 
            bodyText: '포용성장 전문인력양성사업에 참여하여 KIST의 AI&로봇연구소장실에 배정됨. 이후 실험실 복장 인식 키오스크 프로젝트에 참여함.', alt: 'KIST' },
        { src: 'ProjectThumbnail/lets_go_now.png', category: '프로젝트', headText: '개인프로젝트 - lets go now', 
            bodyText: '학원에서 진행한 개인프로젝트로, 외출 전에 알고 나가면 편한 정보들을 모바일 화면에서 한 눈에 보고싶어 시작하게 된 프로젝트. 버스/지하철/날씨/옷차림에 대한 정보를 API를 통해 알려준다.', alt: 'Let\'s Go Now' },
        { src: 'ProjectThumbnail/jrgb.png', category: '프로젝트', headText: '유저 커스텀 3D 악세사리 서비스',
            bodyText: '교내 강의인 종합설계프로젝트 과목에서 진행한 프로젝트로, 유저가 사진/감정/성별 등의 파라미터를 입력하고 버튼을 누르면, 그 데이터를 토대로 닮은 동물과 그 동물+파라미터를 반영한 3D 객체를 생성하고 3D프린터로 프린트해주는 서비스.', alt: 'JRGB' },
        { src: 'ProjectThumbnail/netflix_clone.png', category: '클론코딩', headText : 'Netflix 클론코딩',
            bodyText : '학원에서 진행한 클론코딩 (넷플릭스)', alt: 'netflix'},
        { src: 'ProjectThumbnail/my_shop.png', category: '클론코딩', headText : 'Netflix 클론코딩',
            bodyText : '학원에서 진행한 클론코딩 (쇼핑몰)', alt: 'my_shop'},
        { src: 'ProjectThumbnail/genesis.png', category: '클론코딩', headText : '쇼핑몰 클론코딩',
            bodyText : '학원에서 진행한 클론코딩 (넷플릭스)', alt: 'genesis'},
        { src: 'ProjectThumbnail/gdsc_hackaton.png', category: '해커톤', headText : 'GDSC 세미해커톤',
            bodyText : 'GDSC에서 진행한 세미해커톤으로, 최종 등수 3등을 달성한 알고리즘 코드 개선 프로젝트', alt: 'GDSC'},
    ];

    const listRef = useRef<HTMLUListElement | null>(null);

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

        const items = listRef.current?.querySelectorAll('.portfolio-item');
        items?.forEach(item => observer.observe(item));

        return () => {
            items?.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <>
            <Floater>
                <SectionTitle>활동 목록</SectionTitle>
                <PortfolioListContainer>
                    <PortfolioList ref={listRef}>
                        {imageList.map((data, index) => (
                            <PortfolioItem key={index} className="portfolio-item">
                                <PortfolioCellSRC portfolioData={data} index={index} />
                            </PortfolioItem>
                        ))}
                    </PortfolioList>
                </PortfolioListContainer>
            </Floater>
        </>
    );
}

export default PortfolioCell;

export const Floater = styled.div`
    z-index:5;
`

export const SectionTitle = styled.div`
    display: flex;
    position: relative;
    left: 10%;
    margin-top: 3%;
    font-size: 48px;
    color:black;
    font-family:"SCDream8";
`;

const PortfolioListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 60px 0;
`;

const PortfolioList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: flex-start;
    width: calc(380px * 3 + 40px * 2); 
`;

const PortfolioItem = styled.li`
    flex: 1 1 380px;
    max-width: 380px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.fade-in {
        opacity: 1;
    }
`;
