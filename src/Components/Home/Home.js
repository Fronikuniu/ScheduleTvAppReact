import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <div className="container">
        <div className="popular-shows">
          <h1>Popular shows today!</h1>
          <div className="popular-shows-display"></div>

          <Link to="" className="button-of-full-view">
            More shows! <span className="material-icons-round">double_arrow</span>
          </Link>
        </div>

        <div className="popular-stars">
          <h1>Popular stars!</h1>
          <div className="popular-stars-display"></div>

          <Link to="" className="button-of-full-view">
            More stars! <span className="material-icons-round">double_arrow</span>
          </Link>
        </div>

        <div className="schedule">
          <h1>Schedule for today!</h1>
          <div className="schedule-display"></div>

          <Link to="" className="button-of-full-view">
            Full schedule! <span className="material-icons-round">double_arrow</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
