import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

import Home from "./containers/Home";
import Personajes from "./containers/Personajes";
import Personaje from "./containers/Personaje";



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Router>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/characters">Personajes</Link>
            </li>
           
          </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/characters">
              <Personajes />
            </Route>

            <Route path="/character/:id">
              <Personaje />
            </Route>
          </Switch>
        </Router>

      </header>
     

    </div>
  );
}

export default App;
