import Ads from '../Ads/Ads';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import './ShowDetailsView.css';

function ShowDetailsView({ basic, episodes, seasons }) {
  function createMarkup() {
    return { __html: basic.summary };
  }

  return (
    <>
      <div className="show-details-view">
        <h1>{basic.name}</h1>
        <ShowDetailsViewMenu basic={basic} />

        <div className="show-details-view__display">
          <div className="view">
            <img src={basic.image != null ? basic.image.medium : placeholder} alt={basic.name} />
            <div className="view__follow">
              <span className="material-icons">favorite_border</span>
              <span> Follow</span>
            </div>
          </div>
          <div className="show-details-view__text" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>

        <div className="show-details-view__basic-episodes"></div>
      </div>

      <aside className="show-details-view__aside">
        <div className="show-details-view__aside__info">
          <h2>Show Info:</h2>
          <h3>
            Network:{' '}
            <span>
              {' '}
              {basic.network != null ? (
                <>
                  <Link to="" className="">
                    {basic.network.name}
                  </Link>{' '}
                  <img
                    className="h1__flag"
                    src={`//static.tvmaze.com/intvendor/flags/${basic.network.country.code.toLowerCase()}.png`}
                    alt={basic.network.country.name}
                    title={basic.network.country.name}
                  />
                </>
              ) : (
                ''
              )}
            </span>
          </h3>
          <h3>
            Premiered: <span>{basic.premiered}</span>
          </h3>
          <h3>
            Schedule: <span>{basic.schedule != null ? `${basic.schedule.days} at ${basic.schedule.time} (${basic.runtime}min)` : ''}</span>
          </h3>
          <h3>
            Status: <span>{basic.status}</span>
          </h3>
          <h3>
            Show type: <span>{basic.type}</span>
          </h3>
          <h3>
            Genres: <span>{basic.genres + ''}</span>
          </h3>
          <h3>
            Language: <span>{basic.language}</span>
          </h3>
          <h3 className="show-details-view__aside__rating">
            <i className="material-icons-round star">star_border</i>
            Rating: {basic.rating != null ? basic.rating.average : ''}
          </h3>
        </div>

        <Ads />
      </aside>
    </>
  );
}

export default ShowDetailsView;
