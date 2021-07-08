import React from 'react'
import {FaBars,FaBlogger,FaGithub} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinko,
    NavBtn,
    NavBtnLink,
    NavBtnLinko
} from './NavbarElements'
const Navbar = ({toggle}) => {
    return (
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">RUBICTRON</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLinko href="https://rubictronsandakalum.blogspot.com/"><FaBlogger/></NavBtnLinko>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLinko href="https://github.com/rubictron"><FaGithub/></NavBtnLinko>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
    )
}

Navbar.propTypes = {

}

export default Navbar
