import "./App.css";
import Randomizer from "./components/Randomizer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="title">Cocktail Selector Site</h1>
          <Randomizer />
        </div>
      </header>
    </div>
  );
}

export default App;
