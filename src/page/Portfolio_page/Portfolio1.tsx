import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@linaria/react';
import CellPeopleTable from '../../components/cell_detail_c/CellPeopleTable';
import { getPortfolioData } from '../../api/firebase';
import PortfolioHead from '../../components/portfolio_c/PortfolioHead';

interface FirebaseData {
    title: string;
    tag: string;
    tag2: string;
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
            <PortfolioHead />
            <Container>
                <span className='title'>{firebaseData.title}</span>
                <span className='tag'>{firebaseData.tag}</span>
                <span className='tag2'>{firebaseData.tag2}</span>
                <p className='text1'>{firebaseData.text1}</p>
                <CellPeopleTable data={firebaseData.table} />
                <p className='text2'>{firebaseData.text2}</p>
                <p className='text3'>{firebaseData.text3}</p>
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
    width: 50%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5%;
`;
