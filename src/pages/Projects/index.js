import React, { Component } from "react";
import Fade from "react-reveal";
import { ProjectContainer, ProjectTitle } from './Projectelements'
import ProjectCard from './ProjectCard'
import { Row, Button } from 'react-bootstrap';

import jreq_ss from '../../images/jreq.jpg'
import jfiller_ss from '../../images/jfiller.jpg'
import airmouse_ss from '../../images/airmouse.jpg'
import usbblock_ss from '../../images/usbblock.jpg'
import inventry_ss from '../../images/inventry.png'

class Projects extends Component {
  render() {


    return (
      <Fade left>
        <ProjectContainer id="projects">
          <ProjectTitle>Projects</ProjectTitle>
          <Row>
            <ProjectCard
              title="MAZE SOLVING LIBRARY FOR ARDUINO "
              description="An Arduino library for solving maze and store data in EEPROM has developed using c++ Arduino"
              imglink="https://raw.githubusercontent.com/rubictron/maze-solving-library-for-arduino/master/ExampleMaze.JPG"
            >
              <a href="https://github.com/rubictron/maze-solving-library-for-arduino">
                <Button variant="secondary" >GitHub</Button></a>
            </ProjectCard>

            <ProjectCard
              title="CHROME EXTENTION TO AUTOFILL FORM DATA"
              description="Implement a chrome extension which can autofill the form data in Jira create form. User can save data as several profile and fill data according to it." 
              imglink = {jfiller_ss}
              />
            <ProjectCard
              title="JIRA DATA EXTRACTOR USING PERL/PYTHON"
              description="Implement Command line and GUI base script to extract Jira information and sent specify persons through email" 
              imglink = {jreq_ss}
              />
            <ProjectCard
              title="DEFECTED PRODUCT DETECTION USING IMAGE PROCESSING AND FPGA"
              description=" Implement a standalone crack detection system for tile production line with a minimum delay by using FPGA image processing" 
              />
            <ProjectCard
              title="ARDUINO BASED AIR MOUSE"
              description=" A wireless computer pointing glove with accelerometer and gyroscope  sensors based movement control is designed through RF communication." 
              imglink = {airmouse_ss}
              />
            <ProjectCard
              title="INTELLIGENT TRAFFIC LIGHT SIMULATOR"
              description=" Intelligent traffic light system that can change the cycle time and the each green time according to the vehicle flow rate is developed for the demonstration at Techno 2018." 
              />
            <ProjectCard
              title="USB BLOCKER FOR WINDOWS"
              description=" A GUI base software that enable and disable all USB ports in Windows 7 or Higher is built using C#." 
              imglink = {usbblock_ss}
              />
            <ProjectCard
              title="INVENTORY MANAGEMENT SYSTEM "
              description=" A software implementation of a processes and procedures that oversee the monitoring and maintenance of laboratory equipment." 
              imglink = {inventry_ss}
              />


          </Row>
        </ProjectContainer>

      </Fade>
    );
  }
}

export default Projects;