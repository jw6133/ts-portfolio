import React from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';

interface PortfolioData {
    src: string;
    category: string;
    headText: string;
    bodyText: string;
    alt: string;
}

interface PortfolioCellSRCProps {
    portfolioData: PortfolioData;
    index: number;
}

const PortfolioCellSRC: React.FC<PortfolioCellSRCProps> = ({ portfolioData, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/Portfolio${index + 1}`);
    };

    return (
        <CellWrapper onClick={handleClick}>
            <img src={portfolioData.src} alt={portfolioData.alt} />
            <TextOverlay className="text-overlay">
                <span className="category">{portfolioData.category}</span>
                <span className="title">{portfolioData.headText}</span>
                <span className="description">{portfolioData.bodyText}</span>
            </TextOverlay>
        </CellWrapper>
    );
}

export default PortfolioCellSRC;

const CellWrapper = styled.div`
    width: 300px;
    height: 400px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

    &:hover {
        transform: scale(1.1);
    }

    &:hover .text-overlay {
        opacity: 1;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const TextOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0.4;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .category {
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: white;
        color: black;
        font-size: 14px;
        padding: 2px 5px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        border-bottom: 1px solid white;
        width: 80%;
        padding: 10px 0;
    }

    .description {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
        margin-top: 5%;
        padding: 0 10px;
        text-align: center;
    }

    &:hover {
        opacity: 1;
    }
`;
