import React from 'react'
import { WhiteBox } from '../../page/Resume'
import CoverLetterCellList from './resume_sub_component/CoverLetterCellList'

type CoverLetterProps = {}

export default function CoverLetter(props: CoverLetterProps) {
  return(
    <>
        <span className="sectionName">자기소개서</span> 
        <WhiteBox>
            <CoverLetterCellList/>
        </WhiteBox>
    </>
  )
}
