import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowCastDetailsView from '../ShowCastDetailsView/ShowCastDetailsView';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import Loader from '../Loader/Loader';
import Ads from '../Ads/Ads';
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
              return (
                <div className="show-cast-content">
                  <div className="show-details-view">
                    <h1>{basic.name} - Cast</h1>
                    <ShowDetailsViewMenu basic={basic} />
                    <ShowCastDetailsView key={basic.id} basic={basic} cast={cast} />
                  </div>
                  <aside className="show-details-view__aside">
                    <Ads />
                  </aside>
                </div>
              );
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
