import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchPeopleByName } from '../Requests/Requests';
import SinglePeopleSearchCard from '../SinglePeopleSearchCard/SinglePeopleSearchCard';
import './SearchPeople.css';

function SearchPeople() {
  const [searchList, setSearchListContent] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    searchPeopleByName(name).then((searchNameResults) => {
      const { data } = searchNameResults;

      if (data.error) {
        return;
      }

      setSearchListContent(data);

      console.log(data);
    });
  }, [name]);

  return (
    <>
      <section className="search-people__container">
        <div className="container">
          <h1>
            Searching people by: <span>{name}</span>
          </h1>
          <div className="search-people">
            <div className="search-people__display">
              {searchList.map((data) => (
                <SinglePeopleSearchCard key={data.person.id} data={data.person} />
              ))}
            </div>
          </div>
          <></>
        </div>
      </section>
    </>
  );
}

export default SearchPeople;
