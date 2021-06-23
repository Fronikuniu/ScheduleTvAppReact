import { Link } from 'react-router-dom';
import './ShowDetailsViewMenu.css';

function ShowDetailsViewMenu({ basic }) {
  return (
    <>
      <div className="details-view__menu">
        <Link className="details-view__menu-item" to={`/search/show/${basic.id}`}>
          Main
        </Link>
        <Link className="details-view__menu-item" to={`/search/show/${basic.id}/episodes`}>
          Episodes
        </Link>
        <Link className="details-view__menu-item" to={`/search/show/${basic.id}/cast`}>
          Cast
        </Link>
        <Link className="details-view__menu-item" to={`/search/show/${basic.id}/crew`}>
          Crew
        </Link>
        <Link className="details-view__menu-item" to={`/search/show/${basic.id}/gallery`}>
          Gallery
        </Link>
      </div>
    </>
  );
}

export default ShowDetailsViewMenu;
