import { Link } from 'react-router-dom';
import './ShowEpisodesDetailsView.css';

function ShowEpisodesDetailsView({ basic, episodes, seasons }) {
  return (
    <>
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
                <Link to={`/search/show/${basic.id}/episodes/${episode.id}`}>{episode.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowEpisodesDetailsView;
