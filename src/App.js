import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';



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
            <li>
            <Link to="/character/:id">Detalle</Link>
            </li>
          </ul>
          </nav>
        </Router>

        <switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/characters">
            <Personajes />
          </Route>

          <Route path="/character/:id">
            <Personaje />
          </Route>
        </switch>
      </header>
      <h1 className="title"> Star Wars  </h1>

      

    </div>
  );
}

export default App;
