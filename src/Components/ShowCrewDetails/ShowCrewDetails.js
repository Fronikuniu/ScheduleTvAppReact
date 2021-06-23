import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowCrewDetailsView from '../ShowCrewDetailsView/ShowCrewDetailsView';
import Loader from '../Loader/Loader';
import './ShowCrewDetails.css';

function ShowCrewDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [crewDetails, setCrewDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getCrewDetailsByID = async () => {
      const crewTab = [];
      const data = await getShowsInfoById(id);

      crewTab.push(data);
      setCrewDetails(crewTab);
    };
    getCrewDetailsByID();

    setLoadingState(false);
  }, [id]);

  let i = 0;

  return (
    <>
      <section className="details__container">
        {!isLoading ? (
          <div className="container">
            {crewDetails.map(({ basic, crew }) => {
              return <ShowCrewDetailsView key={i++} basic={basic} crew={crew} />;
            })}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default ShowCrewDetails;
