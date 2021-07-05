import { Link } from 'react-router-dom';
import Ads from '../Ads/Ads';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import placeholder from '../../assets/images/placeholder.jpg';
import './ShowDetailsView.css';
import ShowCastDetailsView from '../ShowCastDetailsView/ShowCastDetailsView';
import ShowEpisodesDetailsView from '../ShowEpisodesDetailsView/ShowEpisodesDetailsView';

function ShowDetailsView({ basic, episodes, cast, seasons }) {
  function createMarkup() {
    return { __html: basic.summary };
  }

  return (
    <>
      <div className="details-view">
        <h1>{basic.name}</h1>
        <ShowDetailsViewMenu basic={basic} />

        <div className="details-view__display">
          <div className="view">
            <img src={basic.image != null ? basic.image.medium : placeholder} alt={basic.name} />
            <div className="view__follow">
              <span className="material-icons">favorite_border</span>
              <span> Follow</span>
            </div>
          </div>
          <div className="details-view__text" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>

        <div className="details-view__cast">
          <div>
            <ShowEpisodesDetailsView basic={basic} episodes={episodes} seasons={seasons} />

            <Link to={`/search/show/${basic.id}/episodes`} className="button-of-full-view">
              Show full episodes list <span className="material-icons-round">double_arrow</span>{' '}
            </Link>
          </div>

          <div>
            <h2>Cast</h2>
            <ShowCastDetailsView basic={basic} cast={cast} />

            <Link to={`/search/show/${basic.id}/cast`} className="button-of-full-view">
              Show full cast list <span className="material-icons-round">double_arrow</span>{' '}
            </Link>
          </div>
        </div>
      </div>

      <aside className="details-view__aside">
        <div className="details-view__aside__info">
          <h2>Show Info:</h2>
          <h3>
            Network:{' '}
            <span>
              {basic.network != null ? (
                <>
                  {basic.network.name}{' '}
                  <img
                    className="h1__flag"
                    src={`//static.tvmaze.com/intvendor/flags/${basic.network.country.code.toLowerCase()}.png`}
                    alt={basic.network.country.name}
                    title={basic.network.country.name}
                  />
                </>
              ) : (
                'No info'
              )}
            </span>
          </h3>
          <h3>
            Premiered: <span>{basic.premiered != null ? basic.premiered : 'No info'}</span>
          </h3>
          <h3>
            Schedule:{' '}
            <span>
              {basic.schedule != null
                ? `${basic.schedule.days.map((day) => {
                    return `${day} `;
                  })} at ${basic.schedule.time} (${basic.runtime}min)`
                : 'No info'}
            </span>
          </h3>
          <h3>
            Status: <span>{basic.status != null ? basic.status : 'No info'}</span>
          </h3>
          <h3>
            Show type: <span>{basic.type != null ? basic.type : 'No info'}</span>
          </h3>
          <h3>
            Genres:{' '}
            <span>
              {basic.genres != null
                ? basic.genres.map((genre) => {
                    return `${genre} `;
                  })
                : 'No info'}
            </span>
          </h3>
          <h3>
            Language: <span>{basic.language != null ? basic.language : 'No info'}</span>
          </h3>
          <h3 className="details-view__aside__rating">
            <i className="material-icons-round star">star_border</i>
            Rating: {basic.rating != null ? basic.rating.average : 'No info'}
          </h3>
        </div>

        <Ads />
      </aside>
    </>
  );
}

export default ShowDetailsView;
