import { Link } from 'react-router-dom';
import './ShowDetailsViewMenu.css';

function ShowDetailsViewMenu({ basic }) {
  return (
    <>
      <div className="show-details-view__menu">
        <Link className="show-details-view__menu-item" to={`/search/show/${basic.id}`}>
          Main
        </Link>
        <Link className="show-details-view__menu-item" to={`/search/show/${basic.id}/episodes`}>
          Episodes
        </Link>
        <Link className="show-details-view__menu-item" to={`/search/show/${basic.id}/cast`}>
          Cast
        </Link>
        <Link className="show-details-view__menu-item" to={`/search/show/${basic.id}/crew`}>
          Crew
        </Link>
        <Link className="show-details-view__menu-item" to={`/search/show/${basic.id}/gallery`}>
          Gallery
        </Link>
      </div>
    </>
  );
}

export default ShowDetailsViewMenu;
