import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className="footer-app">
        <div className="container">
          <div className="row footer-text-color">
            <div className="col-lg-4">
              <div
                class="footer-item mt-4 mt-lg-0 me-lg-5"
              >
                <h4 class=" mb-4">Jobvia</h4>
                <p>
                  It is a long established fact that a reader will be of a page
                  reader will be of at its layout.
                </p>
                <p class=" mb-0">Follow Us on:</p>
                <ul class="footer-social-menu list-inline mb-0">
                  <li class="list-inline-item mb-2">
                    <a href="/">
                      <BsFacebook/>
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a href="/">
                      <FaTelegram/>
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a href="/">
                      <i class="uil uil-google"></i>
                    </a>
                  </li>
                  <li class="list-inline-item mb-2">
                    <a href="/">
                      <i class="uil uil-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <p>2</p>
            </div>
            <div className="col-6 col-lg-2">
              <p>3</p>
            </div>
            <div className="col-6 col-lg-2">
              <p>4</p>
            </div>
            <div className="col-6 col-lg-2">
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
