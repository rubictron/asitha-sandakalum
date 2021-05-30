import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
    Position : fixed;
    z-index : 990;
    width : 100%;
    height : 100%;
    background : #0d0d0d;
    display:grid;
    align-item:center;
    top 0;
    left 0;
    transition : 0.3 ease-in-out;
    opacity : ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  `  

  export const CloseIcon = styled(FaTimes)`
    colour : #fff;
  `

  export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:trasparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
  `

export const SidebarWrapper = styled.div`
    colour : #fff;    
`
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
    @media screen and (max-width:480px){
         grid-template-rows:repeat(6,60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
     transition :0.2s ease-in-out;
    color:#fff;
    cursor:pointer;
    
    &:hover {
        color:#1a75ff;
        transition :0.2s ease-in-out;
    }
`


export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`


export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:#1a75ff;
    wite-space:nowrap;
    padding:16px 64px;
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






