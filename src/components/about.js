import React, { Component } from "react";
import Resume from "../resumeData/resume.pdf";
import ProfilePicture from "../resumeData/wahyu.jpeg";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              style={{ borderRadius: 100 }}
              className="profile-pic"
              src={ProfilePicture}
              alt=""
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Wahyu Hidayat</span>
                  <br />
                  <span>
                    19-11-2001
                    <br />
                    Pekanbaru, Indonesia
                  </span>
                  <br />
                  <span>085375822726</span>
                  <br />
                  <span>wahyuhidayaddd@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
