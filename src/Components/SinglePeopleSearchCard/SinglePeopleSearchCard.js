import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import placeholder_female from '../../assets/images/placeholder_female.jpg';
import placeholder_male from '../../assets/images/placeholder_male.jpg';
import './SinglePeopleSearchCard.css';

function SinglePeopleSearchCard({ data }) {
  return (
    <>
      <div className="single-people-card">
        <div className="single-people-card__image">
          <Link to="">
            <img
              className="card"
              src={
                data.image != null
                  ? data.image.medium
                  : data.gender === 'Female'
                  ? placeholder_female
                  : data.gender === 'Male'
                  ? placeholder_male
                  : placeholder
              }
              alt={data.name}
            />
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
