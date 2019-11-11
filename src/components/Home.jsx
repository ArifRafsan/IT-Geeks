import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron>
          <h2>Welcome to Allien World!!</h2>
          <p>
            This is how to build a website with React, React-Router &
            React-Bootstrap
          </p>

          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="pwerson-wrapper">
            <Image src="assets/Bill_Gates.jpg" className="profile-pic" circle />
            <h3>Bill Gates</h3>
            <p>
              William Henry Gates III (born October 28, 1955) is an American
              business magnate, investor, author, philanthropist, and
              humanitarian. He is best known as the principal founder of
              Microsoft Corporation. During his career at Microsoft, Gates held
              the positions of chairman, CEO and chief software architect, while
              also being the largest individual shareholder until May 2014.
            </p>
          </Col>

          <Col xs={12} sm={4} className="pwerson-wrapper">
            <Image
              src="assets/Mark_Zuckerberg.jpg"
              className="profile-pic"
              circle
            />
            <h3>Mark Zuckerberg</h3>
            <p>
              Mark Elliot Zuckerberg (born May 14, 1984) is an American
              technology entrepreneur and philanthropist. Zuckerberg is known
              for co-founding and leading Facebook as its chairman and chief
              executive officer. He also co-founded and is a board member of the
              solar sail spacecraft development project Breakthrough Starshot.
            </p>
          </Col>

          <Col xs={12} sm={4} className="pwerson-wrapper">
            <Image
              src="assets/Sergey_Brin.jpg"
              className="profile-pic"
              circle
            />
            <h3>Sergey Brin</h3>
            <p>
              Sergey Mikhaylovich Brin (Russian: Серге́й Миха́йлович Брин; born
              August 21, 1973) is an American computer scientist and Internet
              entrepreneur. Together with Larry Page, he co-founded Google. Brin
              is the president of Google's parent company Alphabet Inc. As of
              October 2019, Brin is the 10th-richest person in the world, with
              an estimated net worth of US$53.8 billion.
            </p>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default Home;
