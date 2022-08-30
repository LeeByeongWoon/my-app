// @flow
import * as React from 'react';
import styled from "styled-components";

type Props = {};
const HeadContain = styled.div`
  background: #1C1B29;
`
const Title = styled.h3`
  color: white;
  text-align: center;
`

export function Header(props: Props) {
    return (
        <HeadContain>
            <Title>Web Crawler</Title>
        </HeadContain>
    );
};
