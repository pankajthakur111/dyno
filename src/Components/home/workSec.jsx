import React from 'react';
import ffs from '../../assets/images/ffs-3-scaled.jpg';
import ico1 from '../../assets/images/user.png';
import ico2 from '../../assets/images/credit.png';
import ico3 from '../../assets/images/download2.png';

const WorkSec =()=> {
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
              <h6 className="sub_title"><span class="sc_item_subtitle">How it works</span></h6>
              <h2 className="title">
              Simple and straightforward
              {" "}
              </h2>
              <div className="dlab-separator-outer">
                <div className="dlab-separator bg-primary"></div>
              </div>
              <p>
              Joining Fast Chiptuningfiles is simple and straightforward. Our intuitive platform ensures that you can quickly access and utilize the files you need to optimize your vehicle's performance. 
              Follow these easy steps to get started:
              </p>
            </div>

          </div>

          {/* Right Column: Video Box */}
          <div className="col-lg-6 mb-4 wow fadeInRight">
          <ul className="account_ul">
      <li>
        <div className="sc_icons_item">
          <div className="sc_icons">
            <img src={ico1} alt="Background" className="img-fluid" />
          </div>
          <div className="sc_icons_item_details">
            <h4 className="sc_icons_item_title">
              <span>1. Create an Account</span>
            </h4>
            <div className="sc_icons_item_description">
              <span>Sign up on our website to become a member.</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="sc_icons_item">
          <div className="sc_icons">
          <img src={ico2} alt="Background" className="img-fluid" />
          </div>
          <div className="sc_icons_item_details">
            <h4 className="sc_icons_item_title">
              <span>2. Buy Credits</span>
            </h4>
            <div className="sc_icons_item_description">
              <span>Purchase credits through our secure online system.</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="sc_icons_item">
          <div className="sc_icons">
          <img src={ico3} alt="Background" className="img-fluid" />
          </div>
          <div className="sc_icons_item_details">
            <h4 className="sc_icons_item_title">
              <span>3. Download or Upload Files</span>
            </h4>
            <div className="sc_icons_item_description">
              <span>
                Choose from our extensive database of pre-made chiptuning files or upload your own files. 
          
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>

          </div> 
        </div>

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
              <h6 className="sub_title"><span class="sc_item_subtitle">Chiptuning Files</span></h6>
              <h2 className="title">
              Our chiptuning files are designed to maximize your engine’s power and enhance your driving pleasure.
              {" "}
              </h2>
              <div className="dlab-separator-outer">
                <div className="dlab-separator bg-primary"></div>
              </div>
              <p>
              Each file is meticulously crafted to ensure top performance and reliability. Whether you're looking to boost power, improve fuel efficiency, or enhance overall driving dynamics, 
              our chiptuning files deliver outstanding results.
              </p>
            </div>

          </div>

          {/* Right Column: Video Box */}
          <div className="col-lg-6 mb-4 wow fadeInRight">
            <img src={ffs} alt="Background" className="img-fluid" />
          </div> 
        </div>


      </div>
    );
}

export default WorkSec;