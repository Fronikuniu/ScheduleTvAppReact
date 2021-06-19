import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import SearchShows from './Components/SearchShows/SearchShows';
import SearchPeople from './Components/SearchPeople/SearchPeople';
import Shows from './Components/Shows/Shows';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import ShowEpisodesDetails from './Components/ShowEpisodesDetails/ShowEpisodesDetails';
import ShowEpisodesDetailsGuide from './Components/ShowEpisodesDetailsGuide/ShowEpisodesDetailsGuide';
import ShowGalleryDetails from './Components/ShowGalleryDetails/ShowGalleryDetails';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <section className="content">
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
              <Route exact path="/search/show/:id">
                <ShowDetails />
              </Route>
              <Route path="/search/show/:id/episodes">
                <ShowEpisodesDetails />
              </Route>
              <Route path="/search/show/:id/episodesguide">
                <ShowEpisodesDetailsGuide />
              </Route>
              <Route path="/search/show/:id/gallery">
                <ShowGalleryDetails />
              </Route>
            </Switch>
          </section>
        </main>
      </Router>
    </>
  );
}

export default App;
