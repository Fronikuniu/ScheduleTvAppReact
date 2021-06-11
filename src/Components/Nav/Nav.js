import { Link } from 'react-router-dom';
import * as icon from '../../assets/icons';
import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="navi">
        <div className="navi-top">
          <div className="container">
            <Link to="/">
              <img className="logo" src={icon.Logo} alt="Logo" />
            </Link>

            <form className="navi__form">
              <input className="navi__input" type="text" placeholder="Search film" />
              <button className="btn btn-form material-icons md-48">search</button>
            </form>
          </div>
        </div>

        <div className="navi-bottom">
          <div className="container">
            <div className="navi-bottom__links">
              <Link to="/">Home</Link>
              <Link to="/Shows">Shows</Link>
              <Link to="/People">People</Link>
              <Link to="/Schedule">Schedule</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
