import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css';

class Home extends Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome to my website</h2>
                    <p>This is description of me </p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/gude1.png" circle className="profile-pic" />
                        <h3> Gude1</h3>
                        <p>Gude3 is </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/gude2.png" circle className="profile-pic" />
                        <h3> Gude2</h3>
                        <p>Gude2 is </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/gude3.png" circle className="profile-pic" />
                        <h3> Gude3</h3>
                        <p>Gude3 is </p>
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default Home;
