import { useEffect, useState } from 'react';
import { getScheduleByCurrentDate } from '../Requests/Requests';
import ScheduleView from '../ScheduleView/ScheduleView';
import './Schedule.css';

function Schedule() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const [currentData] = useState(`${year}-${month}-${day}`);
  const [country, setCountry] = useState('US');

  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    getScheduleByCurrentDate(country, currentData)
      .then((scheduleResponse) => {
        const { data } = scheduleResponse;
        setScheduleData(data);
      })
      .catch((error) => {});
  }, []);

  console.log(scheduleData);

  return (
    <>
      <div className="schedule-container">
        <div className="container">
          <h1>
            Full Schedule{' '}
            <span>
              of the day <span>{currentData}</span>
            </span>
          </h1>
          <div className="schedule-display">
            {scheduleData.map((schedule) => {
              return <ScheduleView key={schedule.id} schedule={schedule} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
