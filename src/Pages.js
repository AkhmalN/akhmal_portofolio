import React from 'react'
import { Link } from 'react-router-dom'
import profilePicture from './assets/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Col, Image, Row, Button } from 'react-bootstrap';
import {
   MDBFooter,
   MDBContainer,
} from 'mdb-react-ui-kit';
import { TbWorldCheck } from 'react-icons/tb'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import { SKILLS, PROJECTS } from './data'
import './App.css'

const Pages = () => {
   return (
      <>
         <Navbar expand="sm" bg='dark' variant='dark' sticky='top' >
            <Container>
               <Navbar.Brand href="#Home">
                  <span style={{ marginLeft: '10px' }}>Akhmal Novanda</span>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#Home">Home</Nav.Link>
                     <Nav.Link href="#About">About</Nav.Link>
                     <Nav.Link href="#projects">Projects</Nav.Link>
                     <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>


         <Container className='justify-content-center text-center text-white' style={{
            marginTop: '100px'
         }}
            id='Home'>
               <Image src={profilePicture} alt='brand' width={300} height='auto' roundedCircle />
            <h1>Hey, I'M Akhmal Novanda Aziz</h1>
            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall products</p>
            <Link >
               <button type='button' className="btn text-white" style={{ backgroundColor: '#6527BE' }}>
                  Projects
               </button>
            </Link>
         </Container>


         <Container className='text-white' id='About' style={{ marginTop: '200px' }}>
            <h1 className='text-center mb-4'>About Me</h1>
            <p className='text-center mb-5'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <Row>
               <Col sm={8}>
                  <h3 className='mb-4'>Get to know me!</h3>
                  <p>I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.

                     I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

                     I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                  <Link >
                     <button type='button' className="btn text-white mb-5" style={{ backgroundColor: '#6527BE' }}>
                        Contact
                     </button>
                  </Link>
               </Col>
               <Col>
                  <h3 className='mb-3'>My Skills</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                     {SKILLS.map((skill) => {
                        return (
                           <Button className='btn-skill' variant='secondary' key={skill} style={{ margin: '5px' }}>{skill}</Button>
                        )
                     })}
                  </div>
               </Col>
            </Row>
         </Container>
         <Container className='text-center text-white mt-3' >
            <h1>Projects</h1>
            <p className='mb-4' id='projects'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            {PROJECTS.map((project, id) => {
               return (
                  <Row key={id} >
                     <Col sm = {4}>
                        <img src={project.image} width="400" height="300" alt={project.title}/>
                     </Col>
                     <Col sm = {7}>
                        <h3 className='mb-3 mt-3'>{project.name}</h3>
                        <p>{project.description}</p>
                        <Row >
                           <Col>
                              <Link to={project.public_link} target='blank'>
                                 <button type='button' className="btn text-white mb-5" style={{ backgroundColor: '#6527BE' }}>
                                    <Row>
                                       <Col>See</Col>
                                       <Col><TbWorldCheck /></Col>
                                    </Row>
                                 </button>
                              </Link></Col>
                           <Col>
                              <Link to={project.github_link} target='blank'>
                                 <button type='button' className="btn text-white mb-5" style={{ backgroundColor: '#2B2730' }}>
                                    <Row>
                                       <Col>Github</Col>
                                       <Col><FaGithub /></Col>
                                    </Row>
                                 </button>
                              </Link>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               )
            })}
         </Container>
         <Container className=' mt-3 ' style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
         }} id='contact'>
            <h1 className='text-center text-white mb-5'>Contact</h1>
            <form className='shadow-sm p-3 mb-5 bg-body-secondary-subtle rounded text-white '>
               <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control bg-secondary border border-dark" id="FormControlInputName" placeholder="input your name" />
               </div>
               <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control form-control bg-secondary border border-dark" id="FormControlInputEmail" placeholder="name@example.com" />
               </div>
               <div className="mb-3">
                  <label className="form-label">Example textarea</label>
                  <textarea className="form-control form-control bg-secondary border border-dark" id="FormControlTextarea" rows="5"></textarea>
               </div>
               <Link >
                  <button type='button' className="btn text-white mb-5 float-end" style={{ backgroundColor: '#6527BE' }}>
                     Submit
                  </button>
               </Link>
            </form>
         </Container>
         <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
               <h3>Social</h3>
               <section className='mb-4'>
                  <Button variant="outline-light" className='m-1' href='https://www.facebook.com/' role='button' target='blank'>
                     <FaFacebook />
                  </Button>

                  <Button variant="outline-light" className='m-1' href='https://www.instagram.com/akhmal7_/' role='button' target='blank'>
                     <FaInstagram />
                  </Button>
                  <Button variant="outline-light" className='m-1' href='https://twitter.com/home?lang=id' role='button' target='blank'>
                     <FaTwitter />
                  </Button>

                  <Button variant="outline-light" className='m-1' href='https://www.linkedin.com/in/akhmal-novanda-451467238/' role='button' target='blank'>
                     <FaLinkedinIn />
                  </Button>

                  <Button variant="outline-light" className='m-1' href='https://github.com/AkhmalN' role='button' target='blank'>
                     <FaGithub />
                  </Button>
               </section>
               <section className='mb-4'>
                  <p>
                     A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                  </p>
               </section>
            </MDBContainer>

            <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
               © 2020 Copyright: Akhmal Novanda
            </div>
         </MDBFooter>
      </>
   )
}

export default Pages
