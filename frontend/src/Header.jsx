import linkedin from "./assets/linkedin-svgrepo-com.svg";
import github from "./assets/github-142-svgrepo-com.svg";
import email from "./assets/email-svgrepo-com.svg";

export default function Header() {
  return (
    <div className="header-container ">
      <div className="header-left">
        <h2>Felix's Portfolio</h2>
      </div>
      <div className="header-right">
        <a
          target="_blank"
          href="https://drive.google.com/uc?export=download&id=18qrOMHRWMQ2LpsVuZtO9B9VL6rfRQWSG"
          download
          className="social-box cv-download"
        >
          CV
        </a>
        <a
          target="_blank"
          href="mailto:felixsunderwood@gmail.com"
          className="social-box"
        >
          <img src={email} height="30px" width="30px" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Fel1x22"
          className="social-box"
        >
          <img src={github} height="30px" width="30px" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/felixunderwood/"
          className="social-box"
        >
          <img src={linkedin} height="30px" width="30px" />
        </a>
      </div>
    </div>
  );
}
