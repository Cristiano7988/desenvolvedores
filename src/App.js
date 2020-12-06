import GitLogo from "./components/GitLogo";
import "./assets/App.css";

function App() {
  return (
    <section className="main-section">
      <GitLogo />
      <h1>GitSearch</h1>
      <input type="text" placeholder="Pesquisar..." />
      <div className="btn-container">
        <button className="btn ver-todos">Ver Todos</button>
        <button className="btn buscar">Buscar</button>
      </div>
    </section>
  );
}

export default App;
