import { Link } from 'react-router-dom';
import './ScheduleView.css';

function ScheduleView({ schedule }) {
  return (
    <>
      <div className="schedule-card">
        <div className="schedule-time">{schedule.airtime != null ? schedule.airtime : ''}</div>
        <div className="schedule-text">
          {' '}
          <h2>
            <Link to={`/search/show/${schedule.show.id}`}>{schedule.show.name != null ? schedule.show.name : ''}</Link>
          </h2>
          <h3>
            New episode: <Link to="">{schedule.name != null ? schedule.name : ''}</Link>
          </h3>
          <span className="schedule-season-episode">
            S{schedule.season != null ? schedule.season : ''} E{schedule.number != null ? schedule.number : ''}
          </span>
        </div>
      </div>
    </>
  );
}

export default ScheduleView;
