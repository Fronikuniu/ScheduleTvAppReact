import { useEffect, useState } from 'react';
import { getCountries, getScheduleByCurrentDate } from '../Requests/Requests';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Ads from '../Ads/Ads';
import ScheduleView from '../ScheduleView/ScheduleView';
import './Schedule.css';

function Schedule() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const [currentData, setCurrentData] = useState(`${year}-${month}-${day}`);
  const [country, setCountry] = useState('US');

  const [scheduleData, setScheduleData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getScheduleByCurrentDate(country, currentData)
      .then((scheduleResponse) => {
        const { data } = scheduleResponse;
        setScheduleData(data);
      })
      .catch((error) => {});

    getCountries()
      .then((countryResult) => {
        const { data } = countryResult;
        setCountryData(data);
      })
      .catch((error) => {});
  }, [country, currentData]);

  const onChangeData = (event) => {
    const newDay = event.getDate().toString().padStart(2, '0');
    const newMonth = (event.getMonth() + 1).toString().padStart(2, '0');
    const newYear = event.getFullYear();

    setCurrentData(`${newYear}-${newMonth}-${newDay}`);
  };

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
          <div className="schedule-content">
            <div className="schedule-display">
              {scheduleData.map((schedule) => {
                return <ScheduleView key={schedule.id} schedule={schedule} />;
              })}
            </div>
            <aside className="schedule__aside">
              <div className="schedule-aside-content">
                <h4>
                  Choose date: <span>{currentData}</span>
                </h4>
                <CalendarComponent value={currentData} change={(event) => onChangeData(event.value)} />

                <h4>Choose country:</h4>
                <select
                  name="selectCountry"
                  className="schedule-aside-select"
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                >
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  {countryData.map((countryItem) => {
                    return (
                      <option key={countryItem.name} value={countryItem.alpha2Code}>
                        {countryItem.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Ads />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
