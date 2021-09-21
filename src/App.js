import "./App.css";
import "./components/picCard.css";
import PicContainer from "./components/PicContainer";

function App() {
  return (
    <>
      <h1 className="main-title">Spacestagram </h1>
      <p className="main-subtitle">
        powered by Nasa's astronomy picture of the day API
      </p>
      <PicContainer />
    </>
  );
}

export default App;
