import React from 'react'
import {styled} from '@linaria/react';
import PortfolioHead from '../components/portfolio_c/PortfolioHead';

type NotFoundProps = {};

export default function NotFound(props: NotFoundProps) {

  return (
    <>
        <PortfolioHead/>
        <TextWrapper>
            NotFound
        </TextWrapper>
    </>
  )
}

export const TextWrapper=styled.div`
    width:100%;
    margin-top:130px;
`