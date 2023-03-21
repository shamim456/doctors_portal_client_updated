import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" footer-container h-[407px]">
      <div className="footer p-10 text-accent w-full flex justify-around items-center ">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="footer footer-center p-4 text-base-content">
        <p>
          Copyright © {currentYear} - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
