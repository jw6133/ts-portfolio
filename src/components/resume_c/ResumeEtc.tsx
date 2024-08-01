import React from 'react'
import { WhiteBox } from '../../page/Resume'
import { RiNotionFill } from "react-icons/ri";
import { styled } from '@linaria/react';

type ResumeEtcProps = {}

export default function ResumeEtc(props: ResumeEtcProps) {
  return(
    <>
        <span className="sectionName">포트폴리오</span>
        <WhiteBox>
            <URLWrapper>
                <RiNotionFill/> 
                <span className='url'>
                    https://ionian-methane-2ee.notion.site/bc34bdcff6124536ae5bd2dfcf415d4b
                </span>
            </URLWrapper>
        </WhiteBox>
        <span className="sectionName">취업우대/병역</span>
        <WhiteBox>
            <DisorderWrapper>
                <DisorderItem>
                    <label htmlFor="disorder">장애 :</label>
                    <select id="disorder" name="disorder">
                        <option value="6">6급</option>
                        <option value="none">없음</option>
                        <option value="1">1급</option>
                        <option value="2">2급</option>
                        <option value="3">3급</option>
                        <option value="4">4급</option>
                        <option value="5">5급</option>
                    </select>
                </DisorderItem>
                <DisorderItem>
                    <label htmlFor="military">병역 :</label>
                    <select id="military" name="military">
                        <option value="exempted">면제</option>
                        <option value="normal">현역</option>
                        <option value="agent">공익</option>
                        <option value="pending">미필</option>
                    </select>
                </DisorderItem>
            </DisorderWrapper>
        </WhiteBox>
    </>
  )
}

const URLWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;

    .url {
        font-size: 16px;
        color: #007bff;
    }
`

const DisorderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2%;
    background-color:#f5f7fa;
`

const DisorderItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    label {
        font-size: 16px;
        font-weight: bold;
    }

    select {
        padding: 5px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;

        &:focus {
            border-color: #007bff;
        }
    }
`
