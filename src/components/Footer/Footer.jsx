import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer-outer-container">
              <div className="footer-inner-container">
                <div className="footer-icons">
                  <FaFacebook className="icon-spacing" />
                  <FaInstagram className="icon-spacing" />
                  <FaYoutube className="icon-spacing" />
                </div>
      
                <div className="footer-data">
                  <div>
                    <ul>
                      <li>Audio Description</li>
                      <li>Investor Relations</li>
                      <li>Legal Notice</li>
                    </ul>
                  </div>
      
                  <div>
                    <ul>
                      <li>Help Center</li>
                      <li>Jobs</li>
                      <li>Cookies References</li>
                    </ul>
                  </div>
      
                  <div>
                    <ul>
                      <li>Gift Cards</li>
                      <li>Terms of Use</li>
                      <li>Corporate Informations</li>
                    </ul>
                  </div>
      
                  <div>
                    <ul>
                      <li>Media Center</li>
                      <li>Privacy</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
      
                <div className="service-code">
                  <p className="code-box">Service Code</p>
                </div>
                <div className="copy-right"> &copy; 1997-2024 Netflix, inc.</div>
              </div>
            </div>
    </>
  )
}

export default Footer