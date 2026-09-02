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
  }

  return (
    <div
      //className="single-project-box"
      className={`single-project-box ${isHover ? "project-box-mouseOn" : "project-box-mouseOff"} ${isExpanded ? "project-box-expanded" : ""}`
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={cat} className="project-picture" alt="personal-picture" />
      <div className="proj-text">
        <h1>{name}</h1>
        <h2>{tech}</h2>
        {isExpanded && <p dangerouslySetInnerHTML={{ __html: description }} />}
      </div>
      <div className="button-div">
        <button
          className="expand-button"
          type="button"
          onClick={toggleExpanded}
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            ) }
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
          `For my final year project at university, I researched and created a new rendering technique for showing black and white textures in 3D. This built off the work of <a href='https://www.w3schools.com'>Rune Johansen</a>. My work involved generalising this technique to a matrix of texture instead of dots, allowing for higher levels of detail and awareness of the texture's structure to be shown. This also allows for the detail shown to increase as the camera approaches the surface, improving performance over standard rendering. This produced higher accuracy textures than standard dithering methods, and I was delighted to achieve a mark of 74% for the project.`
        }
      />
      <SingleProjectBox
        name={"Backend Banking API"}
        tech={"Python, FastAPI, PostgreSQL, Pytest"}
        description={"Built a REST API for handling, verifying and storing banking transactions. The API was specifically designed to be able to work under high load conditions, with potentially millions of transactions uploaded at once. To achieve this, I made use of file streaming to avoid storing the entire large files at once, and asynchronous transactions with a Postgres database. This avoided having to wait on each insert to complete before the next transaction could be processed. Finally, Pytest was used to ensure the system functioned as expected, including in edge cases and high load scenarios."}
      />
      <SingleProjectBox
        name={"Website Scraper and Analyser"}
        tech={"Python, Selenium, BeautifulSoup"}
        description={"Built an application in Python for scraping statistics off gaming website 'hltv.org'. Made use of Selenium drivers to retrieve content, including JavaScript rendered content. Implemented threading to allow multiple drivers to act at once, halving response time for individual calls. Built a search system, allowing users to find individual players, teams and matches, returning data in JSON format."}
      />
      <SingleProjectBox
        name={"Eventlite: Event Planning App"}
        tech={"Java, Springboot, Thymeleaf"}
        description={"Worked in a team of seven students to build an event planning app, making use of the Model View Controller framework. Made use of Thymeleaf templating, allowing users to interact with the app via dynamic webpages. Built a set of unit tests using JUnit, achieving code coverage of 90% across the application. Presented the final product against a specification overseen by a senior lecturer, achieving an overall unit mark of 69%."}
      />
      <SingleProjectBox
        name={"IntervU: Interview Preparation Site"}
        tech={"Javascript, PHP, HTML5, CSS, MySQL"}
        description={"Led a team of six in building an interview practice tool, as a part of my first year project. The main tool allowed users to practice HireVue recorded interview questions, and get feedback from administrators. Alongside this, I implemented a discussion board for users to connect with eachother, as well as static advice pages for different firms and questions. Presented the final result to a panel of three lecturers, achieving a final unit mark of 85%."}
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
