import React, { Component } from "react";
import Fade from "react-reveal";
import ProfilePic from '../../images/profilePic.jpg'
import * as Bst from "react-bootstrap";

import {
  AboutContainer,
  AboutProfile,
  ProfileImg,
  AboutContent,
  AboutTitle

} from './AboutElements'

class About extends Component {
  render() {


    return (
      <Fade left>
      <AboutContainer id="about">
        <Bst.Container>
          <Bst.Row>
            <Bst.Col md={5}>
              <AboutProfile>
                <ProfileImg src={ProfilePic} alt="Profile Pic" />
              </AboutProfile>
            </Bst.Col>
            <Bst.Col md>
              <AboutTitle>
                About Me
              </AboutTitle>
              <AboutContent>
                I am an Engineer equipped with technical skills and innovative ideas, enthusiastic team player who could fully cooperate on the organization’s goals and eager to continue with the lifelong learning.
              </AboutContent>
            </Bst.Col>
          </Bst.Row>
        </Bst.Container>

      </AboutContainer>
      </Fade>
    );
  }
}

export default About;
