import React, { useEffect, useState } from 'react';
import Head from '../../components/Head';
import { styled } from '@linaria/react';
import CellPeopleTable from '../../components/cell_detail_c/CellPeopleTable';
import { getPortfolioData } from '../../api/firebase';

interface FirebaseData {
    title: string;
    tag: string;
    text1: string;
    table: any; // 필요한 경우 구체적인 타입으로 변경하세요
    text2: string;
}

const Portfolio1: React.FC = () => {
    const [firebaseData, setFirebaseData] = useState<FirebaseData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Calling getPortfolioData...");
            const data = await getPortfolioData();
            console.log("Received data: ", data);
            if (data.length > 0) {
                setFirebaseData(data[0] as FirebaseData);
            }
        };

        fetchData();
    }, []);

    if (!firebaseData) {
        return (
            <LoadingWrapper>
                <img src='photo/loading.gif' alt="Loading..."/>
            </LoadingWrapper>
        );
    }

    return (
        <>
            <Head />
            <Container>
                <span className='title'>{firebaseData.title}</span>
                <span className='tag'>{firebaseData.tag}</span>
                <p className='text1'>{firebaseData.text1}</p>
                <CellPeopleTable data={firebaseData.table} />
                <p className='text2'>{firebaseData.text2}</p>
            </Container>
        </>
    );
};

export default Portfolio1;

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 5%;
    .title {
        position: relative;
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 2%;
    }
    .tag {
        position: relative;
        font-size: 16px;
        margin-bottom: 2%;
    }
    .text1 {
        margin-bottom: 2%;
    }
    .text2 {
        margin-bottom: 2%;
    }
`;

const LoadingWrapper = styled.div`
    width:50%;
    height:50%;
    margin:0 auto;
    margin-top:5%;
`
