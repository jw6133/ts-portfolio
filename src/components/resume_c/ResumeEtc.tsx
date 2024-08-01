import React from 'react'
import { WhiteBox } from '../../page/Resume'

type ResumeEtcProps = {}

export default function ResumeEtc(props: ResumeEtcProps) {
  return(
    <>
        <span className="sectionName">포트폴리오</span>
        <WhiteBox>
            노션 링크
        </WhiteBox>
        <span className="sectionName">취업우대/병역</span>
        <WhiteBox>
            면제
        </WhiteBox>
    </>
  )
}
