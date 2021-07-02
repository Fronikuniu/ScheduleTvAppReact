import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import SearchShows from './Components/SearchShows/SearchShows';
import SearchPeople from './Components/SearchPeople/SearchPeople';
import Shows from './Components/Shows/Shows';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import ShowEpisodesDetails from './Components/ShowEpisodesDetails/ShowEpisodesDetails';
import ShowEpisodesDetailsGuide from './Components/ShowEpisodesDetailsGuide/ShowEpisodesDetailsGuide';
import ShowGalleryDetails from './Components/ShowGalleryDetails/ShowGalleryDetails';
import ShowCastDetails from './Components/ShowCastDetails/ShowCastDetails';
import PeopleDetails from './Components/PeopleDetails/PeopleDetails';
import ShowCrewDetails from './Components/ShowCrewDetails/ShowCrewDetails';
import PeopleGalleryDetails from './Components/PeopleGalleryDetails/PeopleGalleryDetails';
import People from './Components/People/People';
import Home from './Components/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Episodes from './Components/Episodes/Episodes';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Shows">
              <Shows />
            </Route>
            <Route path="/People">
              <People />
            </Route>
            <Route path="/Schedule">
              <Schedule />
            </Route>

            <Route path="/search/shows=:query">
              <SearchShows />
            </Route>
            <Route path="/search/people=:name">
              <SearchPeople />
            </Route>

            <Route exact path="/search/show/:id">
              <ShowDetails />
            </Route>
            <Route exact path="/search/show/:id/episodes">
              <ShowEpisodesDetails />
            </Route>
            <Route path="/search/show/:id/episodesguide">
              <ShowEpisodesDetailsGuide />
            </Route>
            <Route path="/search/show/:id/cast">
              <ShowCastDetails />
            </Route>
            <Route path="/search/show/:id/crew">
              <ShowCrewDetails />
            </Route>
            <Route path="/search/show/:id/gallery">
              <ShowGalleryDetails />
            </Route>
            <Route path="/search/show/:id/episodes/:episodeid">
              <Episodes />
            </Route>

            <Route exact path="/search/people/:id">
              <PeopleDetails />
            </Route>
            <Route path="/search/people/:id/gallery">
              <PeopleGalleryDetails />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
