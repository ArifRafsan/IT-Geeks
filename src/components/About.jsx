import React, { Component, Fragment } from "react";
import "./About.css";
import { Image, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/bank-bills.jpg" className="header-image" />
        <Fragment>
          <Col xs={12} sm={8} smOffset={2}></Col>
          <Image
            src="assets/Bill_Gates.jpg"
            className="about-profile-pic"
            rounded
          />

          <h3>Bill Gates</h3>
          <p>
            William Henry Gates III (born October 28, 1955) is an American
            business magnate, investor, author, philanthropist, and
            humanitarian. He is best known as the principal founder of Microsoft
            Corporation. During his career at Microsoft, Gates held the
            positions of chairman, CEO and chief software architect, while also
            being the largest individual shareholder until May 2014.
          </p>
        </Fragment>
      </div>
    );
  }
}
export default About;
