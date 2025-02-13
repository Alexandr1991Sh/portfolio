import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {Skill} from "layout/sections/skills/skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle >My Skills</SectionTitle>
            <div>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill
                        title={'html5'}
                        iconId={'code'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill
                        title={'css3'}
                        iconId={'css'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill
                        title={'React'}
                        iconId={'react'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill
                        title={'typescript'}
                        iconId={'typescript'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill
                        title={'styled components'}
                        iconId={'styledComponent'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill
                        title={'WEB DESIgN  '}
                        iconId={'figma'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </div>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: antiquewhite;
    min-height: 100vh;
`


