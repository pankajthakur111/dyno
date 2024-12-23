import React from 'react';

const FifthSection =()=> {
    return (
        <div className="container">
        {/* File Services Section */}
        <div className="text-center mt-5 mb-3">
          <h2 className="fw-bold">Our File Services</h2>
          <div class="dlab-separator-outer ">
                        <div class="dlab-separator bg-white style-skew"></div>
                    </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card bg-dark border-light h-100 p-4">
              <h4 className="text-danger">Custom Remapped Files</h4>
              <p>
                Dyno Chiptuning Files supplies custom remapped ECU tuning
                software files. 4×4 Dyno tested for the best results.
              </p>
              <a href="#" className="btn btn-outline-danger mt-2">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark border-light h-100 p-4">
              <h4 className="text-danger">Original ECU Files</h4>
              <p>
                Search through our ECU files database by hardware or software
                number and download the original files for your ECU.
              </p>
              <a href="#" className="btn btn-outline-danger mt-2">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark border-light h-100 p-4">
              <h4 className="text-danger">WinOLS (Authorized)</h4>
              <p>
                We are an official WinOLS authorized reseller and dealer. Order
                your WinOLS software and connect your database.
              </p>
              <a href="#" className="btn btn-outline-danger mt-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

    );
}

export default FifthSection;       