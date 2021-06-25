import { useEffect, useState } from 'react';
import { getPeopleInfoById } from '../Requests/Requests';
import PeopleCard from '../PeopleCard/PeopleCard';
import './People.css';

function People() {
  const [peopleList, setPeopleList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  const [peopleListInfo, setPeopleListInfo] = useState([]);

  useEffect(() => {
    let idNumber;
    const idTab = [];

    for (let i = 0; i < 25; i++) {
      idNumber = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
      idTab.push(idNumber);
    }
    setPeopleList(idTab);

    const getPeopleInfo = async () => {
      let persons = [];

      for (const personId of peopleList) {
        const { data } = await getPeopleInfoById(personId);
        persons.push(data);
      }

      setPeopleListInfo(persons);
    };
    getPeopleInfo();
  }, []);

  console.log(peopleList);
  console.log(peopleListInfo);

  return (
    <>
      <section className="show-people-container">
        <div className="container">
          <h1>People</h1>
          <div className="shows-people-display">
            {peopleListInfo.map((people) => {
              return <PeopleCard people={people} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default People;
