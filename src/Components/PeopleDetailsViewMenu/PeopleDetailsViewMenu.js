import { Link } from 'react-router-dom';
import './PeopleDetailsViewMenu.css';

function PeopleDetailsViewMenu({ peopleInfo }) {
  return (
    <>
      <div className="details-view__menu">
        <Link className="details-view__menu-item" to={`/search/people/${peopleInfo.id}`}>
          Main
        </Link>
        <Link className="details-view__menu-item" to={`/search/people/${peopleInfo.id}/gallery`}>
          Gallery
        </Link>
      </div>
    </>
  );
}

export default PeopleDetailsViewMenu;
