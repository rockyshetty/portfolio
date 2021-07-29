import React, { useRef, useEffect, useState } from "react";
import './index.css';
import AboutMeImage from './images/AboutMeImage.png';
import MainImage from './images/MainImage.jpg';
import CSS from './images/Css.jpeg';
import git from './images/git.jpg';
import HTML from './images/HTML.png';
import Laravel from './images/Laravel.png';
import RBootstrap from './images/ReactBootstrap.png';
import ReactJs from './images/ReactJs.png';
import PHP from './images/PHP.png';
import Psql from './images/Psql.jpeg';
import VsCode from './images/Vscode.jpeg';
import JavaScript from './images/js.jpg';
import Atom from './images/atom.png';
import CodeIgnator from './images/CodeIgnator.png';
import { Container, Row, Navbar, Nav, Col, Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
function Design() {
  const ExperianceDetails = [{
    Role: "Software Engineer",
    Duration: "2021-February to Present",
    Project: "Radial",
    Responsibility: [
      "Debugging developed code and providing solutions for the issues.",
      "Integrating new development.",
      "Worked on service desk also providing solution for customer issues and internal issue",
      "Communication with clients through mail"
    ]
  },
  {
    Role: "Associate Software Engineer",
    Duration: "2019-July to 2021-February",
    Project: "Digital Quality Management Tool for Belgium industry",
    Responsibility: [
      "Design and Develop interactive UI's as per client requirement and integration to the project.",
      "Developing Business logic and commuincation with database in the backend",
      "Followed Agile model in development.",
      "Follow Modular way in development and Object Oriented programing.",
      "Participated in Design, development, deployment meetings"
    ]
  }
  ];
  const FrontEnd = [HTML, CSS, ReactJs, RBootstrap, JavaScript];
  const Backend = [PHP, Laravel, Psql];
  const Tools = [git, VsCode, Atom, CodeIgnator];
  const Navigates = ['Home', 'About', 'Experiance', 'Skill', 'Contact'];
  const ContactsData = [
    {
      logo: <i class="fa fa-envelope" aria-hidden="true"></i>,
      description: 'rakeshshetty414@gmail.com',
    },
    {
      logo: <i class="fa fa-linkedin" aria-hidden="true"></i>,
      description: 'rakeshshetty414@gmail.com',
    },
    {
      logo: <i class="fa fa-mobile" aria-hidden="true"></i>,
      description: '+91-7795387746',
    },
    {
      logo: <i class="fa fa-github-square" aria-hidden="true"></i>,
      description: 'rakeshshetty414@gmail.com',
    }
  ]
  const Contacts = () => {
    return <Row id="Contact" className="custom-background">
      {ContactsData.map(value => {
        return <Col>
          <p className="text-center">{value.logo}</p>
          <p className="text-center">{value.description}</p>
        </Col>
      })}
    </Row>
  }
  const MainHeader = () => {
    return <Row className="mt-2 custom-height">
      <div id="Home" className="col-md-12">
        <img src={MainImage} />
        <h2>Rakesh H M</h2>
        <h1> Full stack developer</h1>
      </div>
    </Row>
  };
  const About = () => {
    return <div className="col-md-12 justify-content-center custom-height">
      <h2 className="col-md-12 text-center">About Me</h2>
      <Row xl={2} md={2} sm={1} className="col-md-12 mt-2" id="About" className="align-items-center justify-content-center">
        <Col className="col-md-6 d-flex justify-content-center" id="AboutMeLogo">
          <img src={AboutMeImage} />
        </Col>
        <Col className="col-md-6" id="AboutMeDetail">
          <p>Hi I am Rakesh,</p>
          <p>I Have completed My engineering from Vidya Vikas Institute Of Engineering And Technology Mysuru,
            in the department of Electonics and Comunication.</p>
          <p>
            I have 2 year of experiance in Full stack development as associate software developer.
            In my experiance i got apportunity to work on agile way of development and various technolgies and tools.
            I am passionate about technolgies and try again untill successd believer.
            I am good Team player and possitive  thinker and fast learner.
          </p>
        </Col>
      </Row>
    </div>
  }
  const Experiance = () => {
    return <div className="col-md-12 justify-content-center custom-height">
      <h2 className="col-md-12 text-center">Projects and Experiance</h2>
      <Row xl={2} md={2} sm={1} id="Experiance" className="mt-2 justify-content-center custom-height">
        {Cards(ExperianceDetails)}
      </Row>
    </div>
  }
  const Slideshows = (data, fade = false) => {
    return <Carousel fade={fade}>
      {data && data.map(value => {
        return <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={value}
          />
        </Carousel.Item>
      })}
    </Carousel>
  }
  const Cards = (data) => {
    return data.map(value => {
      return <Col><Card style={{ color: 'white', margin: '2rem', backgroundColor: "transparent" }}>
        <Card.Header className="text-center">
          {value.Project}
        </Card.Header>
        <Row className="d-flex">
          <Col className="col-md-6 text-left">
            <Card.Title>
              {value.Role}
            </Card.Title>
          </Col>
          <Col className="col-md-6 pt-2 pr-4 text-right">
            <Card.Subtitle>
              {value.Duration}
            </Card.Subtitle>
          </Col>
        </Row>
        <Card.Body>
          {value.Responsibility && value.Responsibility.map((value1, i) => {
            return <Card.Text key={i}>
              {'* ' + value1}
            </Card.Text>
          })}
        </Card.Body>
      </Card>
      </Col>
    });
  }
  const Skills = () => {
    return <div className="col-md-12 pt-4 custom-height">
      <h2 className="col-md-12 text-center">Skills and technolgies</h2>
      <Row xl={2} md={2} sm={1} id="Skill" className="d-flex justify-content-center">
        <Col className="p-2">
          {Slideshows(FrontEnd)}
        </Col>
        <Col className="p-2">
          {Slideshows(Backend)}
        </Col>
        <Col className="p-2">
          {Slideshows(Tools, true)}
        </Col>
      </Row>
    </div>
  }

  const Navigations = () => {
    return <Row>
      <Navbar fixed="top" className="col-md-12 gradientBg">
        <Navbar.Brand style={{ color: 'deepskyblue' }}>
          RAKESH H M
        </Navbar.Brand>
        <Nav className="ml-auto">
          {Navigates.map(value => {
            return <Nav.Link className={value} href={'#' + value}>{value}</Nav.Link>
          })}
        </Nav>
      </Navbar>
    </Row>
  }
  return <Container className="App-header gradientBg" fluid>
    {Navigations()}
    {MainHeader()}
    {About()}
    {Experiance()}
    {Skills()}
    {Contacts()}
  </Container>

}
export default Design