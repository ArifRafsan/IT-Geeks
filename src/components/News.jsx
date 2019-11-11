import React, { Component, Fragment } from "react";
import { Image, Col, Row } from "react-bootstrap";

class News extends Component {
  render() {
    return (
      <Fragment>
        <Image src="assets" className="header-image" />
        <h2>News</h2>
        <Row>
          <Col xs={12} sm={8} className="main-section">
            <p>
              This is your world. Everything is happy if you choose to make it
              that way. We'll throw some happy little limbs on this tree.
              Mountains are so simple, they're hard.
            </p>

            <p>
              Let your heart be your guide. Only think about one thing at a
              time. Don't get greedy. Water's like me. It's laaazy ... Boy, it
              always looks for the easiest way to do things
            </p>

            <p>
              If what you're doing doesn't make you happy - you're doing the
              wrong thing. Isn't that fantastic? You can just push a little tree
              out of your brush like that. Let's have a happy little tree in
              here. Steve wants reflections, so let's give him reflections. You
              can't have light without dark. You can't know happiness unless
              you've known sorrow.
            </p>

            <p>
              Pretend you're water. Just floating without any effort. Having a
              good day. Clouds are free they come and go as they please. There
              isn't a rule. You just practice and find out which way works best
              for you. If you do too much it's going to lose its effectiveness.
              A happy cloud.
            </p>

            <p>
              Let the paint work. I think there's an artist hidden in the bottom
              of every single one of us. Mix your color marbly don't mix it
              dead. You can do anything your heart can imagine. Let's put some
              happy little bushes on the other side now.
            </p>

            <p>
              Let's go up in here, and start having some fun Without washing the
              brush, I'm gonna go right into some Van Dyke Brown, some Burnt
              Umber, and a little bit of Sap Green. We have no limits to our
              world. We're only limited by our imagination. You can create
              anything that makes you happy. If you don't think every day is a
              good day - try missing a few. You'll see.
            </p>

            <p>
              The more we do this - the more it will do good things to our
              heart. We don't have to be committed. We are just playing here. In
              painting, you have unlimited power. You have the ability to move
              mountains. Just go out and talk to a tree. Make friends with it.
              We might as well make some Almighty mountains today as well, what
              the heck.
            </p>
          </Col>
          <Col xs={12} sm={4} className="sidebar-section">
            <Image src="assets/Bill_Gates.jpg" />
            <p>
              This is your world. Everything is happy if you choose to make it
              that way. We'll throw some happy little limbs on this tree.
              Mountains are so simple, they're hard.
            </p>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default News;
