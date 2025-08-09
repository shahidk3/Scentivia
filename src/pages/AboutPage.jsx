import React from 'react';
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container my-5 py-5">
        {/* First Section */}
        <div className="row align-items-center mb-5 flex-column flex-md-row">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/about1.png"
              alt="Perfume Collection"
              className="img-fluid rounded shadow hover-zoom w-100"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-bold mb-3">Discover the Essence of Scentivià</h2>
            <p className="lead">
              More than just fragrance, it's a crafted experience. Each scent is designed to
              reflect your mood, elevate your presence, and stay with you throughout the day.
            </p>
          </div>
        </div>

        {/* Second Section - Fullscreen with blur */}
        <div
          className="about-fullscreen-section d-flex flex-column justify-content-center align-items-center text-center text-white"
          style={{
            backgroundImage: "url('/assets/about2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "70vh",
            position: "relative"
          }}
        >
          <div className="overlay-blur"></div>
          <div className="content position-relative">
            <h2 className="fw-bold mb-3">Perfumes for Every Occasion</h2>
            <p className="lead mb-4">
              From first dates to wild nights, summer brunches to luxe evenings,
              Scentivià offers curated selections for every moment that matters.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="btn btn-light px-4 py-2 fw-bold"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* New Custom Blend Section */}
        <div className="text-center my-5">
          <img
            src="/assets/about3.png"
            alt="Custom Perfume Blend"
            className="img-fluid rounded shadow hover-zoom mb-4"
            style={{ maxWidth: "500px", width: "100%" }}
          />
          <h3 className="fw-bold mb-3">Craft Your Signature Scent</h3>
          <p className="lead">Your fragrance. Your story. Created just for you.</p>
          <button
            onClick={() => navigate("/contact")}
            className="btn btn-dark px-4 py-2"
          >
            Start Your Custom Blend
          </button>
        </div>

        {/* Features Section */}
        <div className="container my-5">
          <div className="row text-center gy-4">
            <div className="col-6 col-md-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/609/609361.png"
                alt="Easy Returns"
                className="feature-icon mb-3"
              />
              <h5 className="fw-bold">Easy returns</h5>
              <p className="text-muted small">
                Free returns with easy exchanges and no stress. *Only on damaged products.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2165/2165703.png"
                alt="Free Shipping"
                className="feature-icon mb-3"
              />
              <h5 className="fw-bold">Free shipping</h5>
              <p className="text-muted small">
                Enjoy fast, free shipping on all orders, no minimum, no hidden fees Pan India.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1034/1034798.png"
                alt="Secure Payment"
                className="feature-icon mb-3"
              />
              <h5 className="fw-bold">Secure payment</h5>
              <p className="text-muted small">
                Your information is protected with encrypted checkout and trusted payment methods.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Quality Assured"
                className="feature-icon mb-3"
              />
              <h5 className="fw-bold">Quality assured</h5>
              <p className="text-muted small">
                Every product is carefully crafted to meet high standards and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
