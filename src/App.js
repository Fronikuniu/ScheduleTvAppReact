import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <section className="">
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/Shows"></Route>
              <Route path="/People"></Route>
              <Route path="/Schedule"></Route>
            </Switch>
          </section>
        </main>
      </Router>
    </>
  );
}

export default App;
