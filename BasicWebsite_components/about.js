import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './about.css';

class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/background1.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/gude1.png" className="about-profile-pic" rounded />
                        <h3>Gudetama</h3>
                        <p>lkfjalkdjsldkfjlaksdjfldkasjflkajslfkjds</p>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default About;
