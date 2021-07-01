import { useEffect, useState } from 'react';
import { getPeopleInfoById } from '../Requests/Requests';
import PeopleCard from '../PeopleCard/PeopleCard';
import Loader from '../Loader/Loader';
import './People.css';

function People() {
  const [peopleListInfo, setPeopleListInfo] = useState([]);
  let [peopleList, setPeopleList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);

    const generateRandomIds = () => {
      let idNumber;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      peopleList = [];

      for (let i = 0; i < 25; i++) {
        idNumber = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
        peopleList.push(idNumber);
      }
      setPeopleList(peopleList);
    };
    generateRandomIds();

    const getPeopleInfo = async () => {
      let persons = [];

      for (const personId of peopleList) {
        await getPeopleInfoById(personId)
          .then((response) => {
            const { data } = response;
            persons.push(data);
          })
          .catch((error) => {});
      }

      setPeopleListInfo(persons);
    };
    getPeopleInfo();

    setLoadingState(false);
  }, []);

  return (
    <>
      <section className="show-people-container">
        <div className="container">
          <h1>People</h1>
          {!isLoading ? (
            <div className="shows-people-display">
              {peopleListInfo.map((people) => {
                return <PeopleCard key={people.id} people={people} />;
              })}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </>
  );
}

export default People;
