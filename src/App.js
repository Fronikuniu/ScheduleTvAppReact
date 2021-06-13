import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import SearchShows from './Components/SearchShows/SearchShows';
import SearchPeople from './Components/SearchPeople/SearchPeople';
import Shows from './Components/Shows/Shows';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <section className="">
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/Shows">
                <Shows />
              </Route>
              <Route path="/People"></Route>
              <Route path="/Schedule"></Route>
              <Route path="/search/shows=:query">
                <SearchShows />
              </Route>
              <Route path="/search/people=:name">
                <SearchPeople />
              </Route>
            </Switch>
          </section>
        </main>
      </Router>
    </>
  );
}

export default App;
