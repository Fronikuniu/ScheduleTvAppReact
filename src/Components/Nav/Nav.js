import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as icon from '../../assets/icons';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Nav.css';

function Nav() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchSelectValue, setSearchSelectValue] = useState('shows');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="navi">
        <div className="navi-top">
          <div className="container">
            <Link to="/">
              <img className="logo" src={icon.Logo} alt="Logo" />
            </Link>

            <form
              className="navi__form"
              onSubmit={(event) => {
                event.preventDefault();
                <Redirect to={`/search/${searchSelectValue}=${searchInputValue}`} />;
              }}
            >
              <select
                onChange={(event) => {
                  setSearchSelectValue(event.target.value);
                }}
                className="navi__select"
                name="showsOrPeople"
              >
                <option value="shows">Shows</option>
                <option value="people">People</option>
              </select>
              <input
                onChange={(event) => {
                  setSearchInputValue(event.target.value);
                }}
                value={searchInputValue}
                className="navi__input"
                type="text"
                placeholder="Search shows or people"
              />
              <Link to={`/search/${searchSelectValue}=${searchInputValue}`}>
                <button className="btn btn-form material-icons">search</button>
              </Link>
            </form>

            <BiSearchAlt2 className="rwd-search-btn" onClick={() => setSearchOpen(!searchOpen)} />
            <form
              className={`rwd-navi__form ${searchOpen ? 'open' : ''}`}
              onSubmit={(event) => {
                event.preventDefault();
                <Redirect to={`/search/${searchSelectValue}=${searchInputValue}`} />;
              }}
            >
              <select
                onChange={(event) => {
                  setSearchSelectValue(event.target.value);
                }}
                className="rwd-navi__select"
                name="showsOrPeople"
              >
                <option value="shows">Shows</option>
                <option value="people">People</option>
              </select>
              <input
                onChange={(event) => {
                  setSearchInputValue(event.target.value);
                }}
                value={searchInputValue}
                className="rwd-navi__input"
                type="text"
                placeholder="Search shows or people"
              />
              <Link to={`/search/${searchSelectValue}=${searchInputValue}`}>
                <button className="btn btn-form material-icons">search</button>
              </Link>
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
