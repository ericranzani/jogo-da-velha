import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Menu">
          <span>Sobre</span>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar o <code>src/App.js</code> e salvar para ter alterações.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendendo React
        </a>
      </header>
    </div>
  );
}

export default App;
