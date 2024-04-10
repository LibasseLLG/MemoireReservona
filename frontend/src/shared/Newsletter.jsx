import React from "react"; 
import './newsletter.css'

import { Container, Row, Col } from "reactstrap";
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Abonnez-vous maintenant pour obtenir des informations utiles sur les voyages.</h2>
                        <div className="newletter__input">
                            <input type="email" placeholder="Entrez votre adresse mail" />
                            <button className="btn newsletter__btn">S'abonner</button>
                        </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam neque corrupti eaque vel. Minima, omnis!</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>  
};

export default Newsletter;