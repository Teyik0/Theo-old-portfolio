import logoMail from "../assets/email.png";
import logoLinkedin from "../assets/linkedin.png";
import logoPhone from "../assets/telephone.png";

function Contact() {
  return (
    <div className="contact-content">
      <div className="contact">
        <div className="email">
          <img src={logoMail} alt="mail" width="100px" height="100px" />
          <a href="mailto:sat.theo.fr@icloud.com?subject=contact">
            <span>sat.theo.fr@icloud.com</span>
          </a>
        </div>
        <div className="linkedin">
          <img src={logoLinkedin} alt="linkedin" width="100px" height="100px" />
          <span>
            <a href="https://www.linkedin.com/in/th%C3%A9o-samarasinghe-85a643210/">
              LinkedIn
            </a>
          </span>
        </div>
        <div className="telephone">
          <img src={logoPhone} alt="telephone" width="100px" height="100px" />
          <span>06 98 75 54 79</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
