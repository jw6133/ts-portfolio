import React from 'react';
import { styled } from '@linaria/react';

// 각 데이터 타입 정의
export interface SchoolData {
  '재학기간': string;
  '학교명': string;
  '전공 및 수료과정'?: string;
  '소재지': string;
}

export interface SocialData {
  '활동기간': string;
  '활동구분': string;
  '기관': string;
  '활동내용': string;
}

export interface AwardData {
  '수상일자': string;
  '수상명': string;
  '내용': string;
  '기관': string;
}

export interface CertificateData {
  '취득일자': string;
  '자격증 및 면허': string;
  '급수 및 점수'?: string;
  '취득번호': string;
  '발행기관': string;
}

export interface EtcData {
  '분류': string;
  '상태': string;
  '세부분류' : string;
}

// TableData는 위의 타입 중 하나를 가질 수 있습니다.
type NewTableData = SchoolData | SocialData | AwardData | CertificateData | EtcData;

interface NewTableProps {
  data: NewTableData[];
}

const NewTable: React.FC<NewTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      {data.map((item, index) => (
        <Row key={index}>
          {isSchoolData(item) && (
            <>
              <DataLabel>{item['학교명']}</DataLabel>
              <DetailsWrapper>
                <DataDetails>{item['전공 및 수료과정']}</DataDetails>
                <DataSubDetails>{item['재학기간']}</DataSubDetails>
                <DataSubDetails>{item['소재지']}</DataSubDetails>
              </DetailsWrapper>
            </>
          )}
          {isSocialData(item) && (
            <>
              <DataLabel>{item['활동구분']}</DataLabel>
              <DetailsWrapper>
                <DataDetails>{item['활동내용']}</DataDetails>
                <DataSubDetails>{item['활동기간']}</DataSubDetails>
                <DataSubDetails>{item['기관']}</DataSubDetails>
              </DetailsWrapper>
            </>
          )}
          {isAwardData(item) && (
            <>
              <DataLabel>{item['수상명']}</DataLabel>
              <DetailsWrapper>
                <DataDetails>{item['내용']}</DataDetails>
                <DataSubDetails>{item['수상일자']}</DataSubDetails>
                <DataSubDetails>{item['기관']}</DataSubDetails>
              </DetailsWrapper>
            </>
          )}
          {isCertificateData(item) && (
            <>
              <DataLabel>{item['자격증 및 면허']}</DataLabel>
              <DetailsWrapper>
                <DataDetails>{item['급수 및 점수']}</DataDetails>
                <DataSubDetails>{item['취득일자']}</DataSubDetails>
                <DataSubDetails>{item['발행기관']}</DataSubDetails>
              </DetailsWrapper>
            </>
          )}
          {isEtcData(item) && (
            <>
              <DataLabel>{item['분류']}</DataLabel>
              <DetailsWrapper>
                <DataDetails>{item['상태']}</DataDetails>
                <DataSubDetails>{item['세부분류']}</DataSubDetails>
              </DetailsWrapper>
            </>
          )}
        </Row>
      ))}
    </TableWrapper>
  );
};


// 타입 가드 함수들
function isSchoolData(item: NewTableData): item is SchoolData {
  return '학교명' in item;
}

function isSocialData(item: NewTableData): item is SocialData {
  return '활동구분' in item;
}

function isAwardData(item: NewTableData): item is AwardData {
  return '수상명' in item;
}

function isCertificateData(item: NewTableData): item is CertificateData {
  return '자격증 및 면허' in item;
}

function isEtcData(item: NewTableData): item is EtcData {
  return '분류' in item;
}

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row; /* Change to row for horizontal layout */
  margin-bottom: 16px;
  align-items: flex-start; /* Align items at the start for better control */
`;

const DataLabel = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-right: 16px; /* Add some space between label and details */
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataDetails = styled.span`
  font-size: 16px;
`;

const DataSubDetails = styled.span`
  font-size: 14px;
  color: #777;
  margin-top: 2px;
`;

export default NewTable;
