
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ListPokemon from "./pages/list-pokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={ListPokemon} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
