import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color:#000;
`


export const FooterWrap = styled.div`
    padding:48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1100px;
    margin:auto;
`

export const FooterLinkContainer = styled.div`
    display:flex;
    justify-content:center;


    @media screen and (max-width:768px){
        padding-top:32px;
    }

`

export const FooterLinkWrapper= styled.div`
    display:flex;   

    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

export const FooterLink= styled(LinkR)`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;

    &:hover{
        color:#1a75ff;
        transition:0.3 ease-in;
    }

`
export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start; 
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;  
    color:#fff;

     @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:100%;
    }

`
export const FooterLinkTitle= styled.h1`
    font-size:14px;
    margin-bottom:16px;  
`

export const SocialMedia = styled.section`
    max-width = 1000px;
    width:1000px;
`

export const SocialMediaWrap= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center; 
    margin:40px auto 0 auto;
    max-width:1100px;

     @media screen and (max-width:820px){
          flex-direction:column;
    }
`

export const SocialLogo= styled.div`
    color:#fff;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    maogin-bottom:16px;
    font-weight:bold;
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-Size:24px;
`

export const SocialIcons= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:200px;
` 





export const WebsiteRights= styled.div`
    color:#fff;
    maogin-bottom:16px;
`




