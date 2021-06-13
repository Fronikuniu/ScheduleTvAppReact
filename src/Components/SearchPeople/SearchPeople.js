import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchPeopleByName } from '../Requests/Requests';
import SinglePeopleCard from '../SinglePeopleCard/SinglePeopleCard';
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
      <section className="search-shows__container">
        <div className="container">
          <h1>
            Searching people by: <span>{name}</span>
          </h1>
          <div className="search-shows__display">
            {searchList.map((data) => (
              <SinglePeopleCard key={data.person.id} data={data.person} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchPeople;
