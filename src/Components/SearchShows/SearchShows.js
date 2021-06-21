import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchShowByQuery } from '../Requests/Requests';
import SingleShowSearchCard from '../SingleShowSearchCard/SingleShowSearchCard';
import Ads from '../Ads/Ads';
import Loader from '../Loader/Loader';
import './SearchShows.css';

function SearchShows() {
  const [isLoading, setLoadingState] = useState(true);
  const [searchList, setSearchListContent] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    setLoadingState(true);

    searchShowByQuery(query).then((searchQueryResults) => {
      const { data } = searchQueryResults;

      if (data.error) {
        return;
      }

      setSearchListContent(data);
      setLoadingState(false);

      // for (const key of data) {
      //   const { show } = key;
      // }
      //
      // Destructuring an object in array || Destrukturyzacja obiektu w tablicy
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
            {!isLoading ? (
              <div className="search-shows__display">
                {searchList.map((data) => (
                  <SingleShowSearchCard key={data.show.id} data={data.show} id={data.id} />
                ))}
              </div>
            ) : (
              <Loader />
            )}

            <aside>
              <Ads />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchShows;
