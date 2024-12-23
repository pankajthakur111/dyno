import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgbanner from '../../assets/images/bannerr.png';
import bg1 from '../../assets/images/bg1.jpg';
import Testimonial17 from './Testimonial';
import MainFooter from '../footer/Footer';
import BannerSection from './banner';
import ModelsearchSec from './ModelSearch';
import FifthSection from './fifthSec';
import AboutSection from './AboutSec';
import WorkSec from './workSec';
import MainHeader from '../header/Header';

const Home =() =>{
  return (
    <>
       <section
    >
    <MainHeader />
    </section>
    
  
    <section
      className="bsb-hero-5 px-3 bsb-overlay banner"
      style={{ backgroundImage: `url('${bgbanner}')` }}
    >
      <BannerSection />
    </section>
    
    <div className="header_bottom reveal reveal--delay-800 bottom-banner">
      <Container fluid="lg">
        <Row className="align-items-center">
          <Col md={8} className="header_bottom_content">
            <h3>
              <p>
                <span className="text-white">
                  Login or create your account <strong>free of charge!</strong>
                </span>
              </p>
            </h3>
          </Col>
          <Col md={4} className="text-md-end btn-group">
            <Button
              href="#"
              target="_self"
              title="Login"
              variant="outline-light"
              className="me-2"
            >
              Login
            </Button>
            <Button
              href="#"
              target="_self"
              title="Register now"
              variant="primary"
            >
              Register now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>

    <section className="bg-light py-5 Modelsearch-sec">
     <ModelsearchSec />
    </section>



      <section

      className="text-light py-5 four_sec"
      style={{ backgroundImage: `url('${bg1}')` }}
    >
      <div className="container">
        {/* Steps Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Receive Your Custom Remapped Files</h2>
          <div class="dlab-separator-outer ">
                        <div class="dlab-separator bg-white style-skew"></div>
                    </div>
                    <p>in 4 steps</p>         
        </div>
        <div className="row gy-4">
          <div className="col-md-3 text-center">
            <div className="card bg-dark border-light h-100 p-3">
              <h4 className="text-danger">1. Create an Account</h4>
              <p>
                Your own (free) dashboard will be created and is ready to use
                immediately.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card bg-dark border-light h-100 p-3">
              <h4 className="text-danger">2. Buy Credits</h4>
              <p>
                To get remapped files, you need to have credits. Pay securely
                online.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card bg-dark border-light h-100 p-3">
              <h4 className="text-danger">3. Upload Your File</h4>
              <p>
                Upload your tuning file so we can start remapping and optimize
                it.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card bg-dark border-light h-100 p-3">
              <h4 className="text-danger">4. Download Your File</h4>
              <p>
                Download your custom remapped file within an hour and start
                using it.
              </p>
            </div>
          </div>
        </div>

        {/* File Services Section */}
      </div>
    </section>


    <section
      className="text-light py-5 four_sec fifth_sec"
    >
    <FifthSection />
    </section>



    <section className="section-full about-box content-inner bg-gray" id="about">
      <AboutSection />
    </section>


    <section className="section-full about-box content-inner bg-gray" id="work">
    <WorkSec />
    </section>


   <section>
   <Testimonial17 />
   </section>

 
  
   <section>
   <MainFooter />
   </section>
    </>

  
  )
}


export default Home;
