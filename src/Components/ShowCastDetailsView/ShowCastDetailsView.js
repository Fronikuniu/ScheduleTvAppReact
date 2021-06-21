import { Link } from 'react-router-dom';
import Ads from '../Ads/Ads';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import placeholder from '../../assets/images/placeholder.jpg';
import './ShowCastDetailsView.css';

function ShowCastDetailsView({ basic, cast }) {
  return (
    <>
      <div className="show-details-view">
        <h1>{basic.name} - Cast</h1>
        <ShowDetailsViewMenu basic={basic} />

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
                  <Link to="">
                    <h2>{person.name}</h2>
                  </Link>
                  <h3>{`As ${character.name}`}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <aside className="show-details-view__aside">
        <Ads />
      </aside>
    </>
  );
}

export default ShowCastDetailsView;
