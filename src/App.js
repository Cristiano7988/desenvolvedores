import GitLogo from "./components/GitLogo"
import './assets/App.css';

function App() {
  return ( 
    <section className="main-section">
      <GitLogo />
      <h1>GitSearch</h1>
      <input type="text" placeholder="Pesquisar..." />
    </section>
  );
}

export default App;
