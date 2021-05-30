import React from 'react'
import PropTypes from 'prop-types'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
    SidebarMenu
} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = "/" >GitHub</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
