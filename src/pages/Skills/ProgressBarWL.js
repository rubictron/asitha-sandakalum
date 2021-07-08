import React from 'react'
import PropTypes from 'prop-types'
import  { Row,Col,ProgressBar }  from 'react-bootstrap';
import { PbarContainer } from './SkillElements'

const ProgressBarWL = props => {
    return (
        <PbarContainer>
            <Row>
                <Col md={3}>
                <h6>{props.label}</h6>
                </Col>
                <Col>
                <ProgressBar now={props.ptg} />
                </Col>
            </Row>
        </PbarContainer>
    )
}

ProgressBarWL.propTypes = {

}

export default ProgressBarWL
