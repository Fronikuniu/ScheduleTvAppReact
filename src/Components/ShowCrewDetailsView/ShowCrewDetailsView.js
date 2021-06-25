import { Link } from 'react-router-dom';
import Ads from '../Ads/Ads';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import placeholder from '../../assets/images/placeholder.jpg';
import './ShowCrewDetailsView.css';

function ShowCrewDetailsView({ basic, crew }) {
  let i = 0;

  return (
    <>
      <div className="details-view">
        <h1>{basic.name} - Crew</h1>
        <ShowDetailsViewMenu basic={basic} />

        <div className="show-cast-details-view__display">
          {crew.map(({ type, person }) => {
            return (
              <div key={i++} className="cast-person-card">
                <img
                  src={person.image != null ? (person.image.medium != null ? person.image.medium : person.image.original) : placeholder}
                  alt={`${person.name} img`}
                  title={person.name}
                  className="cast-person-img"
                />
                <div className="cast-person__text">
                  <Link to={`/search/people/${person.id}`}>
                    <h2>{person.name}</h2>
                  </Link>
                  <h3>{type}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <aside className="details-view__aside">
        <Ads />
      </aside>
    </>
  );
}

export default ShowCrewDetailsView;
