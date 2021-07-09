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
    //if (!this.props.data) return null;

    const name = "Asitha";//this.props.data.name;
    const bio = "Asitha";//this.props.data.bio;
    const street = "Asitha";//this.props.data.address.street;
    const city = "Asitha";//this.props.data.address.city;
    const state = "Asitha";//this.props.data.address.state;
    const zip = "Asitha";//this.props.data.address.zip;
    const phone = "Asitha"; //this.props.data.phone;
    const email = "Asitha";//this.props.data.email;
    const resumeDownload = "Asitha";//this.props.data.resumedownload;

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