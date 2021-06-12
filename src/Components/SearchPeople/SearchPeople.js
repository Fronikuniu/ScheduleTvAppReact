import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchShowByQuery } from '../Requests/Requests';
import './SearchPeople.css';

function SearchPeople() {
  const [searchList, setSearchListContent] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    searchShowByQuery(query).then((searchNameResults) => {
      const { data } = searchNameResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      setSearchListContent(results);
    });
  }, [query]);

  return (
    <>
      <section className="search-shows__container">
        <div className="container">
          <h1>
            Searching people by: <span>{query}</span>
            {searchList}
          </h1>
        </div>
      </section>
    </>
  );
}

export default SearchPeople;
