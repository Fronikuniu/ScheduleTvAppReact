import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import Ads from '../Ads/Ads';
import './EpisodesView.css';

function EpisodesView({ basic, episodeData }) {
  function createMarkup() {
    return { __html: episodeData.summary };
  }

  return (
    <>
      <div className="episodes-view">
        <h1>{episodeData.name}</h1>

        <div className="episodes-view__display">
          <img src={episodeData.image != null ? episodeData.image.medium : placeholder} alt={episodeData.name} />

          <div className="details-view__text" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>

      <aside className="details-view__aside">
        <div className="details-view__aside__info">
          <h2>Episode Info:</h2>
          <h3>
            Show:{' '}
            <span>
              <Link to={`/search/show/${basic.id}`}>{basic.name}</Link>
            </span>
          </h3>
          <h3>
            Number:{' '}
            <span>
              Season {episodeData.season}, Episode {episodeData.number}
            </span>
          </h3>
          <h3>
            Airdate: <span>{episodeData.airdate}</span>
          </h3>
          <h3>
            Runtime: <span>{basic.runtime} min</span>
          </h3>
          <h3 className="details-view__aside__rating">
            <i className="material-icons-round star">star_border</i>
            Rating: {basic.rating != null ? basic.rating.average : ''}
          </h3>
        </div>

        <Ads />
      </aside>
    </>
  );
}

export default EpisodesView;
