import React from 'react';
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import './AboutPage.css'; // for hover zoom effect

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        {/* First Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="/assets/about1.png"
              alt="Perfume Collection"
              className="img-fluid rounded shadow hover-zoom"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Discover the Essence of Scentivià</h2>
            <p className="lead">
              More than just fragrance, it's a crafted experience. Each scent is designed to
              reflect your mood, elevate your presence, and stay with you throughout the day.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src="/assets/about2.png"
              alt="Perfume for Occasions"
              className="img-fluid rounded shadow hover-zoom"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="fw-bold mb-3">Perfumes for Every Occasion</h2>
            <p className="lead">
              From first dates to wild nights, summer brunches to luxe evenings,
              Scentivià offers curated selections for every moment that matters.
            </p>
          </div>
        </div>

        <div className="container my-5 mt-5">
          <div className="row text-center">
            {/* feature cards */}
          </div>
        </div>

        {/* New Custom Blend Section */}
        <div className="text-center my-5">
          <img
            src="/assets/about3.png"
            alt="Custom Perfume Blend"
            className="img-fluid rounded shadow hover-zoom mb-4"
            style={{ maxWidth: "500px" }}
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

        <div className="container my-5 mt-5">
          <div className="row text-center">
            {/* feature cards */}
          </div>
        </div>

        <div className="container my-5 mt-5">
          <div className="row text-center">
            {/* feature cards */}
          </div>
        </div>

        {/* Features Section */}
        <div className="container my-5">
          <div className="row text-center">
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
