import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // <footer className=" footer-container h-[407px]">
    //   <div className="footer p-10 text-accent w-full flex justify-around items-center ">
    //     <div>
    //       <span className="footer-title">Services</span>
    //       <Link className="link link-hover">Branding</Link>
    //       <Link className="link link-hover">Design</Link>
    //       <Link className="link link-hover">Marketing</Link>
    //       <Link className="link link-hover">Advertisement</Link>
    //     </div>
    //     <div>
    //       <span className="footer-title">Company</span>
    //       <Link className="link link-hover">About us</Link>
    //       <Link className="link link-hover">Contact</Link>
    //       <Link className="link link-hover">Jobs</Link>
    //       <Link className="link link-hover">Press kit</Link>
    //     </div>
    //     <div>
    //       <span className="footer-title">Legal</span>
    //       <Link className="link link-hover">Terms of use</Link>
    //       <Link className="link link-hover">Privacy policy</Link>
    //       <Link className="link link-hover">Cookie policy</Link>
    //     </div>
    //   </div>
    //   <div className="footer footer-center p-4 text-base-content">
    //     <p>
    //       Copyright © {currentYear} - All right reserved by Shamim Hossen Hridoy
    //     </p>
    //   </div>
    // </footer>

    <footer className="footer-container h-[auto] lg:h-[407px]">
      <div className="footer p-4 lg:p-10 text-accent w-full flex flex-wrap lg:justify-around items-center ">
        <div className="mb-8 lg:mb-0">
          <span className="footer-title">Services</span>
          <Link className="link link-hover block mb-2">Branding</Link>
          <Link className="link link-hover block mb-2">Design</Link>
          <Link className="link link-hover block mb-2">Marketing</Link>
          <Link className="link link-hover block mb-2">Advertisement</Link>
        </div>
        <div className="mb-8 lg:mb-0">
          <span className="footer-title">Company</span>
          <Link className="link link-hover block mb-2">About us</Link>
          <Link className="link link-hover block mb-2">Contact</Link>
          <Link className="link link-hover block mb-2">Jobs</Link>
          <Link className="link link-hover block mb-2">Press kit</Link>
        </div>
        <div className="mb-8 lg:mb-0">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover block mb-2">Terms of use</Link>
          <Link className="link link-hover block mb-2">Privacy policy</Link>
          <Link className="link link-hover block mb-2">Cookie policy</Link>
        </div>
      </div>
      <div className="footer footer-center p-4 text-base-content text-center">
        <p>© {currentYear} - All rights reserved by Shamim Hossen Hridoy</p>
      </div>
    </footer>
  );
};

export default Footer;
