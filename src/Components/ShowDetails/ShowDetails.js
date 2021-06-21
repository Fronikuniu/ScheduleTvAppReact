import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowDetailsView from '../ShowDetailsView/ShowDetailsView';
import Loader from '../Loader/Loader';
import './ShowDetails.css';

function ShowDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [showDetailsInfo, setShowDetailsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getShowDetailsInfo = async () => {
      const basicTab = [];
      const data = await getShowsInfoById(id);

      basicTab.push(data);
      setShowDetailsInfo(basicTab);
    };
    getShowDetailsInfo();

    setLoadingState(false);
  }, [id]);

  return (
    <>
      <section className="show-details__container">
        {!isLoading ? (
          <div className="container">
            {showDetailsInfo.map(({ basic, episodes, seasons }) => (
              <ShowDetailsView key={basic.id} basic={basic} episodes={episodes} seasons={seasons} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default ShowDetails;
