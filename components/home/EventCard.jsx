import React from 'react';
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
//import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import Modal from 'react-bootstrap/Modal';

const ProfileCardMid = ({ title, date, description, buttonText }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="/home/events.jpg" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Date: {date}</Card.Text>
      <Card.Text>Description: {description}</Card.Text>
        <Button variant="primary" style={{
                    backgroundColor: "#34e0a1",
                    borderColor: "white",
                    color: "black",
                    fontWeight: "normal",}}>{buttonText} </Button>
      <Button variant="danger" size='sm' >cancel</Button>
    </Card.Body>
  </Card>
);

const EventCard = ({ title, date, description}) => {
  return (
    <div>
        <ProfileCardMid 
        title = {title}
        date = {date}
        description = {description}
        //imageSrc = {bookingData.bookingInfo[2].HotelImage}
        buttonText ="details"
        //buttonLink = "/"
        //onDetailsClick={onDetailsClick}
        />
    </div>
  );
};

export default EventCard;