import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowCrewDetailsView from '../ShowCrewDetailsView/ShowCrewDetailsView';
import './ShowCrewDetails.css';

function ShowCrewDetails() {
  const [crewDetails, setCrewDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCrewDetailsByID = async () => {
      const crewTab = [];
      const data = await getShowsInfoById(id);

      crewTab.push(data);
      setCrewDetails(crewTab);
    };
    getCrewDetailsByID();
  }, [id]);

  let i = 0;

  return (
    <>
      <section className="show-details__container">
        <div className="container">
          {crewDetails.map(({ basic, crew }) => {
            return <ShowCrewDetailsView key={i++} basic={basic} crew={crew} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ShowCrewDetails;
