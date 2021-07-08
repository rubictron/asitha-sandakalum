import React from 'react'
import PropTypes from 'prop-types'
import Fade from "react-reveal"
import { Row, Col } from 'react-bootstrap'
import {
    ExpContainer
} from './ExperienceElements'

const Experience = props => {
    return (
        <Fade left>
            <ExpContainer id="skills">
               <div>EXP and EDU</div>
            </ExpContainer>
        </Fade>
            
    )
}


export default Experience