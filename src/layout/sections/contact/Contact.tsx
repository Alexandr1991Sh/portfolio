import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Button} from "components/Button";

export const Contact = () => {
    return (
        <StyledContainer>
            <SectionTitle>Contact</SectionTitle>

            <StyledForm>
                <Field placeholder={'name'}/>
                <Field placeholder={'email'}/>
                <Field placeholder={'Text'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>

        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    background-color: cornflowerblue;
    min-height: 50vh;
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input``
