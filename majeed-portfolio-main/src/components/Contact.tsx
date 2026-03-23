import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:majeedabdul8603@gmail.com" data-cursor="disable">
                majeedabdul<span className="num-font">8603</span>@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/officialmajeed"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-abdul-majeed-773b9237a/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/0fficial_majeed?igsh=MWZuMG4zc2F4Z2gzZA=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://snapchat.com/t/mzrALml4"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Snapchat <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mohammed Abdul Majeed</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
