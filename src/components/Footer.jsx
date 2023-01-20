import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { SiVectorworks } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-content1">
        <span>
          Who We Are / Gift A Class / Membership / Refund Policy / FAQ{" "}
        </span>
        <h4>Contact</h4>
        <div className="app__footer-content1-contact">
          <p>2035 Sunset Lake Road, Suite B-2, Newark, Delaware, 19702</p>

          <p>
            Office Phone: <span>(510) 987-6543 </span> Email:{" "}
            <span>hello@wisdmlabs.com</span>{" "}
          </p>
        </div>
        <h5> © 2022 All rights reserved.</h5>
      </div>
      <div className="app__footer-content2">
        <span>Get Our Lastest News</span>
        <div className="app__footer-content2-button">
          <h6>Enter your email</h6>
          <button>Subscribe</button>
        </div>
        <div className="app__footer-content2-icons">
          <AiFillTwitterCircle className="app__footer-content2-icons-" />
          <FaFacebook className="app__footer-content2-icons-" />
          <SiVectorworks className="app__footer-content2-icons-" />
        </div>
        <p>Privacy & Terms</p>
      </div>
    </div>
  );
};

export default Footer;
