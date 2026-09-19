import { useState } from "react";

export default function SingleProjectBox({
  name,
  tech,
  description,
  isExpanded,
  setIsExpanded,
  image = null,
  video = null,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const toggleExpanded = () => {
    if (isExpanded == name) {
      setIsExpanded(-1);
    } else {
      setIsExpanded(name);
    }
  };

  return (
    <div
      //className="single-project-box"
      className={`single-project-box ${isHover ? "project-box-mouseOn" : "project-box-mouseOff"} ${isExpanded == name ? "project-box-expanded" : "not-expanded"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <img src={image} className="project-picture" alt="personal-picture" />
      )}
      {video && (
        <video className="project-picture" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      )}

      <div className="proj-text">
        <h1>{name}</h1>
        <h2>{tech}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="button-div">
        <button
          className="expand-button"
          type="button"
          onClick={toggleExpanded}
        >
          {isExpanded == name ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
