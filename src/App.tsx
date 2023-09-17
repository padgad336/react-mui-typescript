
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ListPokemon from "./pages/list-pokemon";
import PokemonById from "./pages/pokemon-by-id";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={ListPokemon} path="/" />
        <Route Component={PokemonById} path="/pokemon/:pokemonId" />
      </Routes>
    </Router>
  );
}

export default App;
