import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'
const Navbar = props => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">RUBICTRON</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
