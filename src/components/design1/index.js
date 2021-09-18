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
import { Container, Row, Navbar, Nav, Col, Card} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import PP1 from './images/Personal-project-logo1.jpeg';
import PP2 from './images/Personal-project-logo2.jpeg';
function Design() {
  const cardRef = useRef();
  const ExperianceDetails = [{
    Role: "Software Engineer",
    Duration: "2021-February to Present",
    Project: "Radial",
    Responsibility: [
      "Debugging developed code and providing solutions for the issues.",
      "Integrating new development.",
      "Worked also as service desk, providing solution for customer issues and internal issue",
      "Communication with clients through mail",
      "Followed Waterfall Model"
    ],
    imageUrl: "https://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
  },
  {
    Role: "Associate Software Engineer",
    Duration: "2019-July to 2021-February",
    Project: "AS4",
    Responsibility: [
      "Design and Develop interactive UI's as per client requirement",
      "Integrating new development.",
      "Developing Business logic and commuincation with database in the backend",
      "Follow Modular way in development and Object Oriented programing.",
      "Followed Agile model",
    ],
    imageUrl: "https://cdn.educba.com/academy/wp-content/uploads/2016/06/project1.jpg"
  },
  {
    ProjectType : "Personal",
    Project: "Portofolio",
    Description: "Simple Portfolio using React js, bootstrap, js, CSS, HTML",
    gitHubLink: 'http://rockyshetty.github.io/my-portfolio',
    imageUrl: PP1
  },
  {
    ProjectType : "Personal",
    Project: "TODO APP",
    Description: "Simple REDUX Todo app using React js, bootstrap, js, CSS, HTML",
    gitHubLink: 'http://rockyshetty.github.io/Todo-Redux',
    imageUrl: PP2
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
      description: 'rakesh-h-m-a1b57b166',
    },
    {
      logo: <i class="fa fa-mobile" aria-hidden="true"></i>,
      description: '+91-7795387746',
    },
    {
      logo: <i class="fa fa-github-square" aria-hidden="true"></i>,
      description: 'rockyshetty',
    }
  ]
  const Contacts = () => {
    return <footer className="row" id="Contact" style={{color: 'slategrey'}} >
      {ContactsData.map(value => {
        return <div className="col">
          <p className="text-center"><div className="rotate-contact-icon">{value.logo}</div></p>
          <p className="text-center">{value.description}</p>
        </div>
      })}
    </footer>
  }
  const MainHeader = () => {
    return <div id="Home" className="col-md-12" style={{minHeight:"100vh"}}>
        <img src={MainImage} />
        <h2>Rakesh H M</h2>
        <h1> Full stack developer</h1>
      </div>
  };
  const About = () => {
    return <div className="mb-5">
      <h1 className="text-center">About Me</h1>
      <Row id="About" className="align-items-center justify-content-center">
        <Col className="col-md-6 d-flex justify-content-center" id="AboutMeLogo">
          <img src={AboutMeImage} />
        </Col>
        <Col className="col-md-6" id="AboutMeDetail">
          <p>Hi I am Rakesh,</p>
          <p>I Have completed My engineering from Vidya Vikas Institute Of Engineering And Technology Mysuru,
            in the department of Electonics and Comunication.</p>
          <p>
            I have 2+ year of experiance in Full stack development as associate software developer.
            In my experiance i got apportunity to work on various technolgies & tools, followed agile and  waterfall model development .
          </p>
          <p>
            I am passionate about technolgies and try again untill successd believer.
            I am good Team player and possitive  thinker and fast learner.
          </p>
        </Col>
      </Row>
    </div>
  }
  const Experiance = () => {
    return <div className="mb-5">
      <h1 className="text-center">Projects and Experiance</h1>
      <Row xl={2} md={1} sm={1} id="Experiance" className="mt-2 justify-content-center">
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
  const flipCard = () =>{
    console.log(this);
// let currentNode = cardRef.current.children[1];
// currentNode.children[0].classList.toggle("d-none");
// currentNode.children[1].classList.toggle("d-none");
  }
  const Cards = (data) => {
    return data.map(value => {
      return <Col className="col-md-6">
      <Card  style={{ color: 'white', margin: '2rem', backgroundColor: "#2234ae",
      backgroundImage: "linear-gradient(315deg, #2234ae 0%, #191714 74%)" }}>
       <Card.Img variant="top" src={value.imageUrl} style={{height:"13rem"}}/>
       <Card.Body>
         <div className="card-front">
         {value.ProjectType && <Row>
           <Card.Title className="col">Project Type:</Card.Title>
           <Card.Text className="col">{value.ProjectType}</Card.Text>
         </Row>}  
         <Row>
           <Card.Title className="col">Project Name:</Card.Title>
           <Card.Text className="col">{value.Project}</Card.Text>
         </Row>
         {value.Role && <Row>
           <Card.Title className="col">Role:</Card.Title>
           <Card.Text className="col">{value.Role}</Card.Text>
         </Row>}
         {value.Duration && <Row>
         <Card.Title className="col">Experiance:</Card.Title>
           <Card.Text className="col">{value.Duration}</Card.Text>
         </Row>}
         {value.gitHubLink && <Row>
         <Card.Title className="col">Reference:</Card.Title>
           <Card.Text className="col"><a href={value.gitHubLink}className="text-white">{value.gitHubLink}</a></Card.Text>
         </Row>}
         </div>
         <div >
         <Card.Title className="text-left text-secondary mt-2">
           {value.Description ? 'Description' : 'Responsibility'}
          </Card.Title>
         {value.Responsibility && value.Responsibility.map((value1, i) => {
            return <Card.Text key={i}>
              {`* ${value1}`}
            </Card.Text>
          })}
          {value.Description && <Card.Text>{value.Description}</Card.Text>}
         </div>
       </Card.Body>
      </Card>
      </Col>
    });
  }
  const Skills = () => {
    return <div className="mb-5">
      <h1 className="col-md-12 text-center">Skills and technolgies</h1>
      <Row xl={2} md={2} sm={1} id="Skill" className="d-flex justify-content-center">
        <Col className="p-3">
          {Slideshows(FrontEnd)}
        </Col>
        <Col className="p-3">
          {Slideshows(Backend)}
        </Col>
        <Col className="p-3">
          {Slideshows(Tools, true)}
        </Col>
      </Row>
    </div>
  }

  const Navigations = () => {
    return <Row>
      <Navbar fixed="top" className="col-md-12 gradientBg">
        <Navbar.Brand style={{color: 'slategrey'}}>
          RAKESH H M
        </Navbar.Brand>
        <Nav className="ml-auto">
          {Navigates.map(value => {
            return <Nav.Link className={value} style={{color: 'slategrey'}} href={`#${value}`}>{value}</Nav.Link>
          })}
        </Nav>
      </Navbar>
    </Row>
  }

  return <Container className="App-header gradientBg"  fluid>
    {Navigations()}
    {MainHeader()}
    {About()}
    {Experiance()}
    {Skills()}
    {Contacts()}
  </Container>

}
export default Design