import React from "react";
import "./Footer.css";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

ReactGA.initialize("UA-153283716-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-panel">
          <p>
            Made with <span className="heart">&hearts;</span> by{" "}
            <a href="https://www.jakekemsley.com" target="_blank">
              Kempo
            </a>
          </p>
        </div>
        <div className="footer-panel">
          Spread the xmas spirit
          <div>
            <FacebookShareButton
              className="social-icons"
              url="https://24doors.netlify.com/"
              quote="Christmas is coming! Count down the days with the Online Advent Calendar"
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="social-icons"
              url="https://24doors.netlify.com/"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              className="social-icons"
              url="https://24doors.netlify.com/"
              openWindow="true"
              subject="Online Advent Calendar"
              body="Check out this cool online advent calendar!"
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
        </div>
        <div className="footer-panel">
          Get reminders
          <br />
          <form name="contact" method="POST" data-netlify="true">
            {/* <form
            className="contactForm"
            name="contact"
            method="POST"
            data-netlify="true"
          > */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email address"
              required
            />
            <button className="formSend" type="submit">
              Sign up
            </button>
          </form>
        </div>
        {/* <div className="footer-panel">
          Calendars for Business
          <br />
          <br />
          Coming Soon!
        </div> */}
      </div>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default Footer;
