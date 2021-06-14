import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchShowByQuery } from '../Requests/Requests';
import SingleShowSearchCard from '../SingleShowSearchCard/SingleShowSearchCard';
import './SearchShows.css';

function SearchShows() {
  const [searchList, setSearchListContent] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    searchShowByQuery(query).then((searchQueryResults) => {
      const { data } = searchQueryResults;

      if (data.error) {
        return;
      }

      setSearchListContent(data);

      // for (const key of data) {
      //   const { show } = key;
      // }
      //
      // Destructuring an object in array || Destrukturyzacja obiektu w tablicy

      console.log(data);
    });
  }, [query]);

  return (
    <>
      <section className="search-shows__container">
        <div className="container">
          <h1>
            Searching shows by: <span>{query}</span>
          </h1>
          <div className="search-shows">
            <div className="search-shows__display">
              {searchList.map((data) => (
                <SingleShowSearchCard key={data.show.id} data={data.show} />
              ))}
            </div>{' '}
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchShows;
