import React from 'react';
import thum1 from '../../assets/images/thum1.jpg';
const AboutSection =()=> {
    return (
        
        <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div
            className="col-lg-6 mb-4 pe-lg-5 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "2s",
              animationDelay: "0.3s",
              animationName: "fadeInLeft",
            }}
          >
            <div className="section-head head-style-2">
              <h2 className="title">
              About
              {" "}
                <span className="text-primary">Dyno ChiptuningFiles.</span>
              </h2>
              <div className="dlab-separator-outer">
                <div className="dlab-separator bg-primary"></div>
              </div>
              <p>
              Your trustworthy supplier of high-quality custom remapped tuning software files for almost all the popular petrol and diesel vehicles. 
              Our files are reliable and always 4x4 Dyno tested.
              </p>
            </div>
            <a href="#" className="btn btn-primary btn-md rounded-0">
            LEARN MORE ABOUT DYNO-CHIPTUNINGFILES.COM
            </a>
          </div>

          {/* Right Column: Video Box */}
          <div
            className="col-lg-6 mb-4 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDuration: "2s",
              animationDelay: "0.6s",
              animationName: "fadeInRight",
            }}
          >
            <div className="video-box position-relative">
              <img
                src={thum1} alt="Background"
                className="img-fluid"
              />
              <div className="video-play position-absolute top-50 start-50 translate-middle">
                <a
                  href="https://www.youtube.com/watch?v=5Wu5vhidtR4&t=15s"
                  className="btn btn-gradient shadow-lg rounded-circle"
                  style={{
                    background: "linear-gradient(90deg, #fff 0%, #fff 100%)",
                  }}
                >
                  <i className="bi-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutSection;