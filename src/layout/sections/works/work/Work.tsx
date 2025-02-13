import React from 'react';
import styled from "styled-components";

type WorkProps = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkProps) => {
    return (
        <SteledWork>
            <ImgWorks src={props.src} alt=""/>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>Code</Link>
        </SteledWork>
    );
};
const SteledWork = styled.div`
background-color: coral;
    max-width: 540px;
    width: 100%;
`
const WorkTitle = styled.h3``
const WorkText = styled.p``
const ImgWorks = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a``
