import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">Hope you enjoy it!</div>
      <div className="contact">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/home"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/Suhani-goel-123/VistaJist1"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
