import "./styles/App.css";
import Header from "./Header";
import NameBox from "./NameBox";
import PreviousProjectsBox from "./PreviousProjectsBox";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="name-section">
        <NameBox />
      </div>
      <PreviousProjectsBox />
      <Footer />
    </div>
  );
}

export default App;
