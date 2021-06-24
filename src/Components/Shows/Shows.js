import { useEffect, useState } from 'react';
import { getShows } from '../Requests/Requests';
import ShowsCard from '../ShowsCard/ShowsCard';
import './Shows.css';

function Shows() {
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    getShows().then((showsListResults) => {
      const { data } = showsListResults;

      if (data.error) {
        return;
      }

      setShowsList(data);
    });
  }, []);

  console.log(showsList);

  return (
    <>
      <section className="show-container">
        <div className="container">
          <h1>Shows</h1>
          <div className="shows-display">
            {showsList.slice(0, 25).map((show) => {
              return <ShowsCard show={show} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shows;
