import React from 'react';

const ModelsearchSec =()=> {
    return (
        <div className="container">
        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="input-group">
              <select className="form-select">
                <option defaultValue>Choose a make</option>
                <option value="1">Make 1</option>
                <option value="2">Make 2</option>
                <option value="3">Make 3</option>
              </select>
              <select className="form-select">
                <option defaultValue>Choose a model</option>
                <option value="1">Model 1</option>
                <option value="2">Model 2</option>
                <option value="3">Model 3</option>
              </select>
              <select className="form-select">
                <option defaultValue>Choose a generation</option>
                <option value="1">Generation 1</option>
                <option value="2">Generation 2</option>
                <option value="3">Generation 3</option>
              </select>
              <select className="form-select">
                <option defaultValue>Choose an engine</option>
                <option value="1">Engine 1</option>
                <option value="2">Engine 2</option>
                <option value="3">Engine 3</option>
              </select>
              <button className="btn btn-primary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row text-center">
          <div className="col-md-3">
            <h3 className="fw-bold">14</h3>
            <p>Years of experience</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold">500</h3>
            <p>File transfers a month</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold">470.000</h3>
            <p>Files in our database</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold">3</h3>
            <p>Engineers</p>
          </div>
        </div>
      </div>
    );
}

export default ModelsearchSec;