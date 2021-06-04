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
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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