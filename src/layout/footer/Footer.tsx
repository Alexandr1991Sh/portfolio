import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";

const items = ['instagram', 'telegram', 'vk', 'lonkedin']

export const Footer = () => {
    return (
        <StyledFooter>

            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Alexandr</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            {items.map(item =>
                                <Icon
                                    height={'21px'}
                                    width={'21px'}
                                    viewBox={'0 0 21px 21px'}
                                    iconId={item}
                                />)}
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Alexander Shchukin, Al Rygnz Reserve.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: darkcyan;
    min-height: 20vh;
`

const Name = styled.span``
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialLink = styled.a``
const SocialItem = styled.li``
const Copyright = styled.small``