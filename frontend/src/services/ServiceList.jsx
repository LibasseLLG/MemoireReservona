import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap"; 
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculer la météo",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, tempore!"
    },
    {
        imgUrl: guideImg,
        title: "Meilleure guide touristique",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, tempore!"
    },
    {
        imgUrl: customizationImg,
        title: "personnalisation",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, tempore!"
    },
]

const ServiceList = () => {
    return <>
    {
        servicesData.map((item,index)=> (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
        ))
    }
    </>  
};

export default ServiceList;