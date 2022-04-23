import React, { Component } from "react";
import Fade from "react-reveal";
import { ProjectCardcontainer } from './Projectelements'
import  { Col,Card,Button }  from 'react-bootstrap';



const ProjectCard = props => {

    return (
      <Col md={4}>
      <ProjectCardcontainer>
      <Fade left>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={props.imglink} style={{ height: '27rem' }}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            {props.children}
          </Card.Body>
        </Card>
      </Fade>
      </ProjectCardcontainer>
      </Col>
    );
  }

export default ProjectCard;
