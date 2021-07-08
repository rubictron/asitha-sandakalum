import React, { Component } from "react";
import Fade from "react-reveal";
import { ProjectCardcontainer } from './Projectelements'
import  { Col,Card,Button }  from 'react-bootstrap';



const ProjectCard = props => {

    return (
      <Col md={3}>
      <ProjectCardcontainer>
      <Fade left>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.imglink} />
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
