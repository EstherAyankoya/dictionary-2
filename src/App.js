
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
    <header class="text-center">Esther's Dictionary App</header>
        <main><Dictionary defaultKeyword="hello" /></main>
        <footer class="text-center">
          This project was coded by Esther Ayankoya

          and is{" "}
          <a
            href="https://github.com/EstherAyankoya/dictionary-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/adorable-tartufo-0640d5/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    
    </div>
    </div>
  );
}

export default App;
