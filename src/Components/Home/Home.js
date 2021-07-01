import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getShowsInfoById, getPeopleInfoById } from '../Requests/Requests';
import { getScheduleByCurrentDate } from '../Requests/Requests';
import ShowsCard from '../ShowsCard/ShowsCard';
import PeopleCard from '../PeopleCard/PeopleCard';
import ScheduleView from '../ScheduleView/ScheduleView';
import Loader from '../Loader/Loader';
import './Home.css';

function Home() {
  const [isLoading, setLoadingState] = useState(true);

  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const [currentData] = useState(`${year}-${month}-${day}`);
  localStorage.setItem('CurrentData', currentData);
  // const data = localStorage.getItem('CurrentData');
  // const data = '30-06-2021';

  let [showsListOfIds, setShowsListOfIds] = useState();
  const [showsDataOfIds, setShowsDataOfIds] = useState([]);
  // localStorage.setItem('localShowsListOfIds', showsListOfIds);
  // const localShowsListOfIds = localStorage.getItem('localShowsListOfIds');

  let [peopleListOfIds, setPeopleListOfIds] = useState();
  const [peopleDataOfIds, setPeopleDataOfIds] = useState([]);
  // localStorage.setItem('localPeopleListOfIds', peopleListOfIds);
  // const localPeopleListOfIds = localStorage.getItem('localPeopleListOfIds');

  const [scheduleData, setScheduleData] = useState([]);
  const [country] = useState('US');

  useEffect(() => {
    setLoadingState(true);

    const generateRandomIds = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      showsListOfIds = [];
      // eslint-disable-next-line react-hooks/exhaustive-deps
      peopleListOfIds = [];
      let idShowNumber;
      let idPeopleNumber;

      for (let i = 0; i < 5; i++) {
        idShowNumber = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
        showsListOfIds.push(idShowNumber);
      }
      setShowsListOfIds(showsListOfIds);

      for (let i = 0; i < 5; i++) {
        idPeopleNumber = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
        peopleListOfIds.push(idPeopleNumber);
      }
      setPeopleListOfIds(peopleListOfIds);
    };
    generateRandomIds();

    const getPeopleAndShowsInfo = async () => {
      setLoadingState(true);

      const shows = [];
      for (const showId of showsListOfIds) {
        await getShowsInfoById(showId)
          .then((response) => {
            const { basic } = response;
            shows.push(basic);
          })
          .catch((error) => {});
      }
      setShowsDataOfIds(shows);

      const people = [];
      for (const peopleId of peopleListOfIds) {
        await getPeopleInfoById(peopleId)
          .then((response) => {
            const { data } = response;
            people.push(data);
          })
          .catch((error) => {});
      }
      setPeopleDataOfIds(people);
    };
    getPeopleAndShowsInfo();

    getScheduleByCurrentDate(country, currentData)
      .then((scheduleResponse) => {
        const { data } = scheduleResponse;
        setScheduleData(data);
      })
      .catch((error) => {});

    setLoadingState(false);
  }, []);

  return (
    <>
      <div className="container">
        {!isLoading ? (
          <>
            <div className="popular-shows">
              <h1>Popular shows!</h1>
              <div className="popular-shows-display">
                {showsDataOfIds.map((show) => {
                  return <ShowsCard key={show.id} show={show} />;
                })}
              </div>

              <Link to="/Shows" className="button-of-full-view">
                More shows! <span className="material-icons-round">double_arrow</span>
              </Link>
            </div>
            <div className="popular-stars">
              <h1>Popular stars!</h1>
              <div className="popular-stars-display">
                {peopleDataOfIds.map((people) => {
                  return <PeopleCard key={people.id} people={people} />;
                })}
              </div>

              <Link to="/People" className="button-of-full-view">
                More stars! <span className="material-icons-round">double_arrow</span>
              </Link>
            </div>
            <div className="schedule">
              <h1>Schedule for today!</h1>
              <div className="schedule-display">
                {scheduleData.slice(0, 3).map((scheduleItem) => (
                  <ScheduleView key={scheduleItem.id} schedule={scheduleItem} />
                ))}
              </div>

              <Link to="/Schedule" className="button-of-full-view">
                Full schedule! <span className="material-icons-round">double_arrow</span>
              </Link>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Home;
