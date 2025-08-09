import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-3 border-top">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Left side */}
        <div className="text-muted small">
          <span>© <strong>Scentivià</strong> Perfumes.</span>
          <br />
          <span>All rights reserved.</span>
        </div>

        {/* Right side - Instagram link */}
        <div className="small d-flex align-items-center">
          <span className="me-2">Follow us on</span>
          <a
            href="https://www.instagram.com/scentivia.perfumes?igsh=cjBlb2hwd3o3ZjQ0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
