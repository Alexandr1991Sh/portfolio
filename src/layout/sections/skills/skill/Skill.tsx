import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";

type SkillProps = {
    title: string
    iconId: string
    description: string
}

export const Skill = (props: SkillProps) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
width: 30%;
    background-color: azure;
    margin: 10px;
`
const SkillTitle = styled.h3``
const SkillText = styled.p``

