import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchPeopleByName } from '../Requests/Requests';
import SinglePeopleSearchCard from '../SinglePeopleSearchCard/SinglePeopleSearchCard';
import Loader from '../Loader/Loader';
import './SearchPeople.css';

function SearchPeople() {
  const [isLoading, setLoadingState] = useState(true);
  const [searchList, setSearchListContent] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);

    searchPeopleByName(name).then((searchNameResults) => {
      const { data } = searchNameResults;

      if (data.error) {
        return;
      }

      setSearchListContent(data);

      setLoadingState(false);
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
            {!isLoading ? (
              <div className="search-people__display">
                {searchList.map((data) => (
                  <SinglePeopleSearchCard key={data.person.id} data={data.person} />
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </div>
          <></>
        </div>
      </section>
    </>
  );
}

export default SearchPeople;
