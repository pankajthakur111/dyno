import React from "react";
import "../../assets/css/footer.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

const FooterSection = () => {
  return (
    <>
      <section className="bg-danger text-white text-center py-4 footer-top">
      <div className="container">
      <div className="row">
      <div className="col-md-5 mb-4">
        <h2 className="mb-3">SUBSCRIBE OUR NEWSLETTER TO GET UPDATES</h2>
      </div>  
      <div className="col-md-7 mb-4">
        <form className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control w-50 me-2"
            placeholder="you@yoursite.com"
          />
          <button className="btn btn-dark" type="submit">
            Get Started
          </button>
        </form>
        </div>
        </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-5 footer-bottom">
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-md-3 mb-4">
              <h5 className="text-uppercase fw-bold">Dyno-Chiptuningfiles</h5>
              <p>Subscribe to receive inspiration, ideas, and news in your inbox.</p>
              <div>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div className="col-md-3 mb-4">
              <h5 className="text-uppercase fw-bold text-danger">About Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-3 mb-4">
              <h5 className="text-uppercase fw-bold text-danger">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Design & Quote
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Trade Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-md-3 mb-4">
              <h5 className="text-uppercase fw-bold text-danger">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <span>
                    <i className="bi bi-location-fill text-danger"></i> Address:
                    3741 LR Baarn Netherlands
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bi bi-telephone-fill text-danger"></i> Phone: +31 35 820 0967
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bi bi-envelope-fill text-danger"></i> Email:
                    info@fast-chiptuningfiles.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center border-top border-secondary pt-3">
            <p className="mb-0">
              &copy;Dyno-ChiptuningFiles.com{' '}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;