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

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      //className="single-project-box"
      className={
        isHover
          ? " single-project-box project-box-mouseOn"
          : "single-project-box project-box-mouseOff"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={cat} className="personal-picture" alt="personal-picture" />
      <div className="proj-text">
        <div className="proj-headers">
          <h1>{name}</h1>
          <h3>{tech}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function PreviousProjectsBox() {
  return (
    <div className="projects-box">
      <SingleProjectBox
        name={"3D Rendering Algorithm"}
        tech={"OpenGL, GLSL, Python"}
        description={"hello put a desc here pls."}
      />
      <SingleProjectBox
        name={"Backend Banking API"}
        tech={"Python, FastAPI, PostgreSQL, Pytest"}
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
