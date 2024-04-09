import React from "react"; 
import '../styles/home.css'
import { Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
    return <>

    {/* ==================== hero section start ========================== */}
    <section>
      <Container>
        <Row>
            <Col lg='6'>
                <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center ">
                        <Subtitle subtitle={'Sache Avant De Partir'}/>
                        <img src={worldImg} alt="" />
                    </div>
                    <h1>Voyager ouvre la porte à la création de<span className="highlight"> souvenirs</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat veniam neque eum quos, ullam quibusdam, laboriosam fugiat, laudantium sed voluptatem error exercitationem maiores animi eveniet reprehenderit voluptas quas! Illum, rerum.</p>
                </div>
            </Col>

            <Col lg='2'>
                <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                </div>
            </Col>
             <Col lg='2'>
                <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt="" controls />
                </div>
            </Col>
             <Col lg='2'>
                <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="" />
                </div>
            </Col>

           <SearchBar/>

        </Row>
        </Container>  
    </section>
    {/* ==================== hero section end ========================== */}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle"> Ce que nous servons</h5>
                    <h2 className="services__title">Nous offrons nos meilleurs services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>


    {/* ==================== featured tour section start ========================== */}
    <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explorer'}/>
                    <h2 className="featured__tour-title">Nos visites guidées</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>
    {/* ==================== featured tour section end ========================== */}

    {/* ==================== experience tour section start ========================== */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>

                        <h2>Avec toute notre experience <br/> nous vous servirons</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Voyages Réussis</h6>
                        </div>
                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Clients Réguliers</h6>
                        </div>
                        <div className="counter__box">
                            <span>15</span>
                            <h6>Années d'expérience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/* ==================== experience tour section end ========================== */}
    {/* ==================== gallery section start ========================== */}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery__title"> Visitez la galerie de visites de nos clients</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>
    {/* ==================== gallery  section end ========================== */}


    {/* ==================== Testimonial  section start ========================== */}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Les Fans adorent'}/>
                    <h2 className="testimonial_title">Ce que nos fans disent de nous</h2>
                </Col>
                <Col lg='12'>
                    <Testimonial />
                </Col>
            </Row>
        </Container>
    </section>
    {/* ==================== Testimonial  section end ========================== */}
    </>;   
};

export default Home;