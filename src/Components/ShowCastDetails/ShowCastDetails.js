import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowCastDetailsView from '../ShowCastDetailsView/ShowCastDetailsView';
import Loader from '../Loader/Loader';
import './ShowCastDetails.css';

function ShowCastDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [castDetails, setCastDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getCastDetailsById = async () => {
      const castTab = [];
      const data = await getShowsInfoById(id);

      castTab.push(data);
      setCastDetails(castTab);
    };
    getCastDetailsById();

    setLoadingState(false);
  }, [id]);

  return (
    <>
      <section className="show-details__container">
        {!isLoading ? (
          <div className="container">
            {castDetails.map(({ basic, cast }) => {
              return <ShowCastDetailsView key={basic.id} basic={basic} cast={cast} />;
            })}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default ShowCastDetails;
