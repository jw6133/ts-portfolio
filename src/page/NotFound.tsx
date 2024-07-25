import React from 'react'
import Head from '../components/Head'
import {styled} from '@linaria/react';

type NotFoundProps = {};

export default function NotFound(props: NotFoundProps) {

  return (
    <>
        <Head/>
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