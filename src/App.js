import "./App.css";
import "./components/picCard.css";
import PicContainer from "./components/PicContainer";

function App() {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="main-title">Spacestagram </h1>

        <p className="main-subtitle">
          powered by Nasa's astronomy picture of the day API
        </p>
      </div>
      <div className="link-wrapper">
        <b id="link-github">
          <a href="https://github.com/MichaelZane/photoOfDay">
            See My Github Repo
          </a>
        </b>
      </div>

      <PicContainer />
    </>
  );
}

export default App;
