import "./App.css";
import Randomizer from "./components/Randomizer";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="pad">
            <h1 className="title fw-bold">Cocktail Selector🍸</h1>
            <Randomizer />
            <Search defaultKeyword="Mojito" />
          </div>
        </div>
      </header>
      <footer>
        <div>
          <a
            href="https://github.com/madisonmincevich/cocktail-site"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          code by{" "}
          <a
            href="https://maddiemincevich.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Maddie Mincevich
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
