import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import './SinglePeopleSearchCard.css';

function SinglePeopleSearchCard({ data }) {
  return (
    <>
      <div className="single-people-card">
        <div className="single-people-card__image">
          <Link to="">
            <img className="card" src={data.image != null ? data.image.medium : placeholder} alt={data.name} />
          </Link>

          <div className="single-people-card__follow">
            <a href="/" className="material-icons">
              favorite_border
            </a>
          </div>
        </div>
        <div className="single-people-card__text">
          <h1>
            <Link to={`/search/people/${data.id}`}>{data.name}</Link> <span>{data.birthday != null ? data.birthday : ''}</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SinglePeopleSearchCard;
