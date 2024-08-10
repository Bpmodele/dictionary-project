import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Madali Navas and is open-sourced on{" "}
            <a
              href="https://github.com/Bpmodele/dictionary-project"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://rad-entremet-42e384.netlify.app/" target="_blank">
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
