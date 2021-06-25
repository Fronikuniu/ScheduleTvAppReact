import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import './PeopleCard.css';

function PeopleCard({ people }) {
  return (
    <>
      <div className="shows-people-card">
        <Link to={`/search/show/${people.id}`}>
          <img className="card" src={people.image != null ? people.image.medium : placeholder} alt={people.name} />
        </Link>

        <div className="shows-people-text">
          <Link to={`/search/people/${people.id}`}>{people.name}</Link>
        </div>

        <div className="people-favorite">
          <a href="/" className="material-icons-round" title="Click to follow">
            favorite
          </a>
        </div>
      </div>
    </>
  );
}

export default PeopleCard;
