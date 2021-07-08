import React from 'react'
import PropTypes from 'prop-types'
import {
    FaFacebook,
    FaLinkedinIn,
    FaYoutube,
    FaBlogger,
    FaGithub
} from 'react-icons/fa'
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
        <FooterContainer id="contacts">
            <FooterWrap>
                <FooterLinkContainer>

                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>PHONE</FooterLinkTitle>
                            <FooterLink to="/">+94702014509</FooterLink>
                            <FooterLink to="/">+94771765761</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>ADDRESS</FooterLinkTitle>
                            <FooterLink to="/">
                            Asitha Sandakalum,<br/>
                            No 759/35,<br/>
                            Kudagama,<br/>
                            Hatton(22000),<br/>
                            Sri Lanka.
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
                            <FooterLink to="/">linkedIn</FooterLink>
                            <FooterLink to="/">FaceBook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>OTHERS</FooterLinkTitle>
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
                                <FaLinkedinIn />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/asitha.sandakalum" target="_blank" aria-label="FaceBook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCRhordWjJgBuEf5wnh0x1uw/featured" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://rubictronsandakalum.blogspot.com" target="_blank" aria-label="Bloger">
                                <FaBlogger />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/rubictron" target="_blank" aria-label="GitHub">
                                <FaGithub />
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
