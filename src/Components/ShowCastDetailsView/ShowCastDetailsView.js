import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import './ShowCastDetailsView.css';

function ShowCastDetailsView({ basic, cast }) {
  return (
    <>
      <div className="show-cast-details-view__display">
        {cast.map(({ character, person }) => {
          return (
            <div key={person.id} className="cast-person-card">
              <img
                src={character.image != null ? (character.image.medium != null ? character.image.medium : character.image.original) : placeholder}
                alt={`${character.name} img`}
                title={character.name}
                className="cast-person-img"
              />
              <div className="cast-person__text">
                <Link to={`/search/people/${person.id}`}>
                  <h2>{person.name}</h2>
                </Link>
                <h3>{`As ${character.name}`}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowCastDetailsView;
