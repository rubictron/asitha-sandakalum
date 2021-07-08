import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background : #000;
    display:flex;
    position:sticky;
    height : 80px;
    margin-top: -80px;
    justify-content : center;
    align-items:container;
    font-size:1.5rem;
    top :0;
    z-index:10;

    @media screen and (max-width:960px){
        transmition:0.8s all ease;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content : space-between;
    height :80px;
    z-index :1;
    width : 100%;
    padding : 0 14px;
    

`

export const NavLogo = styled(LinkR)`
    color : #fff;
    justify-self : flex-start;
    cursor :pointer;
    font-size : 1.5rem;
    display :flex;
    align-items : center;
    margin-left : 24px;
    font-weight : bold;
    text-decoration : none;
`


export const MobileIcon = styled.div`
    display:none;
    color : #fff;
    @media screen and (max-width : 768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items : center;
    list-style:none;
    text-align:center;
    /*margin-right:-22px;*/
    margin:0 auto;

    @media screen and (max-width : 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height 100%;
    cursor : pointer;

    &:active{
        border-bottom:3px solid #1a75ff
    }

`

export const NavLinko = styled.a`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height 100%;
    cursor : pointer;

    &:active{
        border-bottom:3px solid #1a75ff
    }

`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;
    @media screen and (max-width:768px){
        display:none;
    }
`


export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#1a75ff;
    wite-space:nowrap;
    padding:10px 22px;
    color : #000;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration : none;

    &:hover {
        transition : all 0.2s ease-in-out;
        background : #fff;
        color:#010606;
    }
`

export const NavBtnLinko = styled.a`
    //border-radius:50px;
    //background:#1a75ff;
    wite-space:nowrap;
    padding:2px 10px;
    color : #FFF;
    font-size:35px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration : none;

    &:hover {
        transition : all 0.2s ease-in-out;
        background : #fff;
        color:#010606;
    }
`

