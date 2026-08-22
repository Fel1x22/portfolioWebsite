import linkedin from "./assets/linkedin-svgrepo-com.svg";
import github from "./assets/github-142-svgrepo-com.svg"

export default function Header() {
  return (
    <div className="header-container ">
      <div className="header-left">
        <h2>Felix's Portfolio</h2>
        <a href="./assets/Felix_Underwood.pdf" download className="cv-download">CV Download</a>
      </div>
      <div className="header-right">
        <a href="https://github.com/Fel1x22" className="social-box">
          <img src={github} height="30px" width="30px"/>
        </a>
        <a href="https://www.linkedin.com/in/felixunderwood/" className="social-box">
          <img src={linkedin} height="30px" width="30px"/>
        </a>
      </div>
    </div>
  );
}
