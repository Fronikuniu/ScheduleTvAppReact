import { useEffect, useState } from 'react';
import { getShows } from '../Requests/Requests';
import ShowsCard from '../ShowsCard/ShowsCard';
import './Shows.css';

function Shows() {
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    getShows()
      .then((showsListResults) => {
        const { data } = showsListResults;
        setShowsList(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <section className="show-people-container">
        <div className="container">
          <h1>Shows</h1>
          <div className="shows-people-display">
            {showsList.slice(0, 25).map((show) => {
              return <ShowsCard key={show.id} show={show} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shows;
