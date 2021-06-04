import React from 'react'
import PropTypes from 'prop-types'
import {
    FaFacebook,
    FaLinkedinIn,
    FaYoutube,
    FaBlogger} from 'react-icons/fa'
import {
FooterContainer,
FooterWrap,
FooterLinkContainer,
FooterLink,
FooterLinkItems,
FooterLinkTitle,
FooterLinkWrapper,
SocialIconLink,
SocialIcons,
SocialLogo,
WebsiteRights,
SocialMediaWrap,
SocialMedia
} from './FooterElements'

const Footer = props => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>RUBICTRON</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/">GitHub</FooterLink>
                            <FooterLink to="/">Blog</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>RUBICTRON</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/">GitHub</FooterLink>
                            <FooterLink to="/">Blog</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>RUBICTRON</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/">GitHub</FooterLink>
                            <FooterLink to="/">Blog</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>RUBICTRON</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/">GitHub</FooterLink>
                            <FooterLink to="/">Blog</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>RUBICTRON</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="http://linkedin.com/in/asitha-sandakalum" target="_blank" aria-label="Linkdin">
                                <FaLinkedinIn/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/asitha.sandakalum" target="_blank" aria-label="FaceBook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCRhordWjJgBuEf5wnh0x1uw/featured" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="https://rubictronsandakalum.blogspot.com" target="_blank" aria-label="Bloger">
                                <FaBlogger/>
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>Copyright (c) 2021 Asitha Sandakalum </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

Footer.propTypes = {

}

export default Footer
