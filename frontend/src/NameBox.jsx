import personalPic from "./assets/Felix.jpeg";

export default function NameBox() {
  return (
    <div className="top-section">
      <img
        src={personalPic}
        className="personal-picture"
        alt="personal-picture"
      />
      <div className="mini1">
        <h1>Felix Underwood</h1>
        <hr width="100%" color="£C88FFF" />
        <h3>Software Engineer | Computer Science Graduate</h3>
      </div>
    </div>
  );
}
