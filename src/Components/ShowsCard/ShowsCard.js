import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import './ShowsCard.css';

function ShowsCard({ show }) {
  return (
    <>
      <div className="shows-people-card">
        <Link to={`/search/show/${show.id}`}>
          <img className="card" src={show.image != null ? show.image.medium : placeholder} alt={show.name} />
        </Link>

        <div className="shows-people-text">
          <Link to={`/search/show/${show.id}`}>{show.name}</Link>
        </div>

        <div className="shows-favorite-rating">
          <a href="/" className="material-icons-round" title="Click to follow">
            favorite
          </a>
          <span className="shows-rating" title={`${show.name} got ${show.rating.average} star!`}>
            <i className="material-icons-round">star</i>
            <p> {show.rating.average}</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default ShowsCard;
