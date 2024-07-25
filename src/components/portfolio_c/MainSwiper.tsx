import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../style/swiperCustomCss.css';
import { styled } from '@linaria/react';

const MainSwiper: React.FC = () => {
    return (
        <PhotoContainer>
            <StyledSwiper
                spaceBetween={10} // 슬라이드 간의 여백(gap)
                slidesPerView={1} // 한번에 보여질 슬라이드 아이템의 갯수
                slidesPerGroup={1} // 슬라이드 이동시 한번에 움직일 슬라이드 아이템의 갯수
                loop // 무한반복
                modules={[Navigation, Pagination]} // 모듈 가져오기
                navigation // 실제 적용
            >
                <SwiperSlide>
                    <SlideContent>
                        <StyledImg src='ProjectThumbnail/chull.jpg' />
                        <Overlay>
                            <Text>컴퓨터네트워크 - 출석부</Text>
                        </Overlay>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <StyledImg src='ProjectThumbnail/farmfarm.jpg' />
                        <Overlay>
                            <Text>창업동아리 - 팜팜</Text>
                        </Overlay>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <StyledImg src='ProjectThumbnail/KIST.jpg' />
                        <Overlay>
                            <Text>포용성장 전문인력양성사업 - KIST</Text>
                        </Overlay>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <StyledImg src='ProjectThumbnail/lets_go_now.png' />
                        <Overlay>
                            <Text>개인프로젝트 - lets go now</Text>
                        </Overlay>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <StyledImg src='ProjectThumbnail/jrgb.png' />
                        <Overlay>
                            <Text>종합설계프로젝트 - 유저 파라미터 3D 악세사리 출력 서비스</Text>
                        </Overlay>
                    </SlideContent>
                </SwiperSlide>
            </StyledSwiper>
        </PhotoContainer>
    );
};

export default MainSwiper;

const PhotoContainer = styled.div`
    width: 100%;
    max-width: 1820px;
    margin: 20px auto;
    overflow: hidden; // Swiper 크기를 초과하는 내용을 숨김
`;

const StyledSwiper = styled(Swiper)`
    height: 480px;
    margin: 0 auto;
`;

const SlideContent = styled.div`
    position: relative;
    top:0;
    width: 100%;
    height: 100%;
    &:hover img {
        opacity: 0.7;
    }
    &:hover div {
        opacity: 1;
    }
`;

const StyledImg = styled.img`
    width: 100%;
    max-width: 1820px;
    height: 480px;
    object-fit: cover; // 이미지가 고정된 크기에 맞게 잘리거나 확대되도록 설정
    transition: opacity 0.3s ease-in-out;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

const Text = styled.div`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;
