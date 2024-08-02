import { styled } from '@linaria/react'
import React from 'react'

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

type FirstProps = {}

export default function First(props: FirstProps) {
  return(
    <>
        <FirstWrapper>
            <span className='title'>First Page</span>
        </FirstWrapper>
    </>
  )
}

const FirstWrapper = styled.div`
    z-index:999;
    background-color:#0093ED;
    width:100%;
    height:100vh;
    position:absolute;
    top:0px;
    color:white;
`