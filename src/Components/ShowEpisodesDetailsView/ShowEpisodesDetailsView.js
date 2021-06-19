import Ads from '../Ads/Ads';
import { Link } from 'react-router-dom';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import './ShowEpisodesDetailsView.css';

function ShowEpisodesDetailsView({ basic, episodes, seasons }) {
  return (
    <>
      <div className="show-details-view">
        <h1>{basic.name} - Episodes list</h1>
        <ShowDetailsViewMenu basic={basic} />

        <div className="show-episodes-details-view__display">
          <div className="show-episodes-details-view__display-seasons">
            <h2>Seasons</h2>
            <div className="seasons-data">
              {seasons.map((season) => {
                return (
                  <Link to="" key={season.id}>
                    {season.number < 10 ? `S0${season.number}` : `S${season.number}`}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2>Episodes</h2>
            <div className="episodes-info">
              <div className="episodes-info-item">Season</div>
              <div className="episodes-info-item">Number</div>
              <div className="episodes-info-item">Date</div>
              <div className="episodes-info-item">Name</div>
            </div>
            <div className="show-episodes-details-view__display-episodes">
              {episodes.map((episode) => {
                return (
                  <div key={episode.id} className="episodes-data">
                    <div className="episodes-data-item">{episode.season}</div>
                    <div className="episodes-data-item">{episode.number}</div>
                    <div className="episodes-data-item">{episode.airdate}</div>
                    <div className="episodes-data-item">
                      <Link to="">{episode.name}</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <aside className="show-details-view__aside">
        <Link to={`/search/show/${basic.id}/episodesguide`}>
          <button className="change-episode__list__guide">
            <span className="material-icons-outlined">explore</span> Episodes Guide
          </button>
        </Link>

        <Ads />
      </aside>
    </>
  );
}

export default ShowEpisodesDetailsView;
