import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowCastDetailsView from '../ShowCastDetailsView/ShowCastDetailsView';
import './ShowCastDetails.css';

function ShowCastDetails() {
  const [castDetails, setCastDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCastDetailsById = async () => {
      const castTab = [];
      const data = await getShowsInfoById(id);

      castTab.push(data);
      setCastDetails(castTab);
    };
    getCastDetailsById();
  }, [id]);

  return (
    <>
      <section className="show-details__container">
        <div className="container">
          {castDetails.map(({ basic, cast }) => {
            return <ShowCastDetailsView key={basic.id} basic={basic} cast={cast} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ShowCastDetails;
