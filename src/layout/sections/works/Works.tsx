import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import {Work} from "layout/sections/works/work/Work";
import socialImg from "./../../../assets/images/proj1.png";
import timerImg from "./../../../assets/images/proj2.png";
import styled from "styled-components";
import {Menu} from "components/menu/Menu";
import {FlexWrapper} from "components/FlexWrapper";

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work
                    src={socialImg}
                    title={'Social Network'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                />

                <Work
                    src={timerImg}
                    title={'Timer'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #96eecc;
`

