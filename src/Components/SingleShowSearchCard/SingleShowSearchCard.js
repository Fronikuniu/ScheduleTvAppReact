import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import './SingleShowSearchCard.css';

function SingleShowSearchCard({ data }) {
  return (
    <>
      <div className="single-show-card">
        <div className="single-show-card__image">
          <Link to={`/search/show/${data.id}`}>
            <img className="card" src={data.image != null ? data.image.medium : placeholder} alt={data.name} />
          </Link>

          <div className="single-show-card__follow">
            <a href="/" className="material-icons">
              favorite_border
            </a>
          </div>
        </div>
        <div className="single-show-card__text">
          <h1>
            <Link to={`/search/show/${data.id}`}>{data.name}</Link>{' '}
            <span>
              {data.network != null ? (
                <>
                  <Link to="" className="single-show-card__text-network">
                    {data.network.name}
                  </Link>{' '}
                  <img
                    className="h1__flag"
                    src={`//static.tvmaze.com/intvendor/flags/${data.network.country.code.toLowerCase()}.png`}
                    alt={data.network.country.name}
                    title={data.network.country.name}
                  />
                </>
              ) : (
                ''
              )}

              {data.network != null && data.premiered != null ? ', ' : ''}

              {data.premiered}
            </span>
          </h1>

          {data._links.nextepisode != null ? (
            <h2>
              Next episode:{' '}
              <Link to={data._links.nextepisode.href} className="material-icons">
                <span className="material-icons-outlined">navigate_next</span>
              </Link>
            </h2>
          ) : (
            ''
          )}

          {data._links.previousepisode != null ? (
            <h3>
              Previous episode:{' '}
              <Link to={data._links.previousepisode.href} className="material-icons">
                <span className="material-icons-outlined">navigate_before</span>
              </Link>
            </h3>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default SingleShowSearchCard;
