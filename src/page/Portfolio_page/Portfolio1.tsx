import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@linaria/react';
import CellPeopleTable from '../../components/cell_detail_c/CellPeopleTable';
import { getPortfolioData } from '../../api/firebase';
import Head from '../../components/Head';

interface FirebaseData {
    title: string;
    tag: string;
    tag2: string;
    photoURL : string;
    text1: string;
    table: any;
    text2: string;
    text3: string;
}

const Portfolio1: React.FC = () => {
    const { index } = useParams<{ index: string }>();
    const [firebaseData, setFirebaseData] = useState<FirebaseData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Calling getPortfolioData...");
            const data = await getPortfolioData();
            console.log("Fetched data: ", data);
            const dataIndex = index ? parseInt(index, 10) - 1 : 0; // Adjusted to start from 0
            if (dataIndex >= 0 && dataIndex < data.length) {
                setFirebaseData(data[dataIndex] as FirebaseData);
                console.log("Data Index: ", dataIndex);
            } else {
                console.error('Data index out of range:', dataIndex);
            }
        };

        fetchData();
    }, [index]);

    if (!firebaseData) {
        return (
            <LoadingWrapper>
                <img src='photo/loading.gif' alt="Loading..." />
            </LoadingWrapper>
        );
    }

    return (
        <>
            <Head/>
            <Container>
                <span className='title'>{firebaseData.title}</span>
                <div className='tags'>
                    <span className='tag'>{firebaseData.tag}</span>
                    <span className='tag2'>{firebaseData.tag2}</span>
                </div>
                <img src={firebaseData.photoURL}/>
                <SectionTitle>1. 프로젝트 소개</SectionTitle>
                <p className='text1'>{firebaseData.text1}</p>
                <SectionTitle>2. 기여도</SectionTitle>
                <CellPeopleTable data={firebaseData.table} />
                <SectionTitle>3. 프로젝트 내용</SectionTitle>
                <p className='text2'>{firebaseData.text2}</p>
                <SectionTitle>4. 성과</SectionTitle>
                <p className='text3'>{firebaseData.text3}</p>
            </Container>
        </>
    );
};

export default Portfolio1;

const Container = styled.div`
    position: relative;
    width: 80%;  
    margin-left: 10%;  
    margin-top: 5%;
    background-color: #dee7f0; /* Background color for the container */
    padding: 20px;
    border-radius: 8px;
    
    .title {
        font-size: 48px;
        font-weight: bold;
        color: #03152D; /* Primary text color */
        font-family: "SCDream8"; /* Apply the same font-family for consistency */
    }

    img{
        width:70%;
        margin: 0 auto;
    }

    .tags {
        display: flex;
        gap: 15px;
        margin: 1.5% 0;
    }

    .tag, .tag2 {
        font-size: 16px;
        padding: 5px 10px;
        background-color: #224F75; /* Dark blue background for tags */
        color: #C8D8E7; /* Light color for text contrast */
        border-radius: 4px;
        font-family: "SCDream8"; /* Consistent font-family */
    }

    .text1, .text2, .text3 {
        margin-bottom: 2%;
        color: #03152D; /* Primary text color */
        line-height: 1.7;
        font-size: 18px;
        font-family: "SCDream8"; /* Consistent font-family */
        white-space: pre-wrap; /* Preserve formatting */
    }

    .text1 {
        margin-top: 2%; 
        border-left: 4px solid #63949E; /* Add a colored border to highlight the introduction */
        padding-left: 15px;
    }
`;

const LoadingWrapper = styled.div`
    width: 50%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dee7f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    img {
        max-width: 100%;
        height: auto;
    }
`;

const SectionTitle = styled.div`
    display: flex;
    position: relative;
    margin: 3% 0;
    font-size: 48px;
    color:black;
    font-family:"SCDream8";
`;
