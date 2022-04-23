import React from 'react'
import PropTypes from 'prop-types'
import Fade from "react-reveal"
import { Row, Col } from 'react-bootstrap'
import ProgressBarWL  from './ProgressBarWL'
import {
    SkillContainer,
    SkillHeader,
    SkillTitle
} from './SkillElements'

const Skills = props => {
    return (
        <Fade left>
            <SkillContainer id="skills">
                <SkillTitle>Skills</SkillTitle>
                <Row>
                    <Col>
                        <SkillHeader>Tecnical Skills</SkillHeader>
                            <ProgressBarWL label="Java" ptg={78}/>
                            <ProgressBarWL label="C/C++" ptg={78}/>
                            <ProgressBarWL label="Python" ptg={75}/>
                            <ProgressBarWL label="html/css" ptg={75}/>
                            <ProgressBarWL label="js" ptg={75}/>
                            <ProgressBarWL label="Verilog" ptg={70}/>
                            <ProgressBarWL label="VHDL" ptg={74}/>
                            <ProgressBarWL label="MySql" ptg={80}/>

                        <SkillHeader>Operating System</SkillHeader>
                            <ProgressBarWL label="Linux/Unix" ptg={85}/>
                            <ProgressBarWL label="Windows" ptg={85}/>
                    </Col>
                    <Col>
                        <SkillHeader>Tools</SkillHeader>
                            <ProgressBarWL label="React" ptg={85}/>
                            <ProgressBarWL label="Jira" ptg={85}/>
                            <ProgressBarWL label="Arduino" ptg={87}/>
                            <ProgressBarWL label="Vim" ptg={72}/>
                            <ProgressBarWL label="Eagle" ptg={80}/>
                            <ProgressBarWL label="Photo shop" ptg={75}/>
                            <ProgressBarWL label="Proteus" ptg={68}/>
                            <ProgressBarWL label="Mp lab" ptg={65}/>
                            <ProgressBarWL label="Model Sim" ptg={71}/>
                            <ProgressBarWL label="Quartus II" ptg={68}/>
                            <ProgressBarWL label="Verdi" ptg={75}/>
                            <ProgressBarWL label="VCS" ptg={70}/>

                    </Col>
                </Row>
            </SkillContainer>
        </Fade>
            
    )
}

Skills.propTypes = {

}

export default Skills
