import cat from "./assets/cat.jpg";
import "../public/css/App.css";
import { useState } from "react";
import Header from "./Header";

function NameBox() {
  return (
    <div className="top-section">
      <img src={cat} className="personal-picture" alt="personal-picture" />
      <div className="mini1">
        <h1>Felix Underwood</h1>
        <hr width="100%" color="£C88FFF" />
        <h3>Software Engineer | Computer Science Graduate</h3>
      </div>
    </div>
  );
}

function SingleProjectBox({ name, tech, description }) {
  const [isHover, setIsHover] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const toggleExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div
      //className="single-project-box"
      className={`single-project-box ${isHover ? "project-box-mouseOn" : "project-box-mouseOff"} ${isExpanded ? "project-box-expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={cat} className="personal-picture" alt="personal-picture" />
      <div className="proj-text">
        <h1>{name}</h1>
        <h2>{tech}</h2>
        {isExpanded && <p>{description}</p>}
      </div>
      <div className="button-div">
        <button
          className="expand-button"
          type="button"
          onClick={toggleExpanded}
        >
          <i
            className={`bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  );
}

function PreviousProjectsBox() {
  return (
    <div className="projects-box">
      <SingleProjectBox
        name={"Novel 3D Rendering Algorithm"}
        tech={"OpenGL, GLSL, Python"}
        description={
          "For my final year project at university, I researched and created a new rendering technique for showing black and white textures in 3D. "
        }
      />
      <SingleProjectBox
        name={"Backend Banking API"}
        tech={"Python, FastAPI, PostgreSQL, Pytest"}
        description={"hello put a desc here pls."}
      />
      <SingleProjectBox
        name={"Website Scraper and Analyser"}
        tech={"Python, Selenium, BeautifulSoup"}
        description={"hello put a desc here pls."}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="name-section">
        <NameBox />
      </div>
      <PreviousProjectsBox />
    </div>
  );
}

export default App;
