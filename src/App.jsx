import "./App.css";
import Jobs from "./Components/Jobs";

function App() {
  return (
    <>
      <header>
        <h1>The Job Board</h1>
      </header>
      <main>
        <Jobs
          className="red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Jobs
          className="green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Jobs
          className="yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Jobs
          className="blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Jobs
          className="pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Jobs
          className="red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Jobs
          className="green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Jobs
          className="yellow"
          title="Développeur React.js"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Jobs
          className="blue"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </main>
      <footer>
        <nav>
          <p>
            Made by <a href="mailto:zamoh@orange.fr">Mohamed ZAOUI</a> in
            cooperation with{" "}
            <a href="https://www.lereacteur.io/">Le Reacteur</a>
          </p>
        </nav>
      </footer>
    </>
  );
}

export default App;
