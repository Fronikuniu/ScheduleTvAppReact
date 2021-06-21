import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowEpisodesDetailsView from '../ShowEpisodesDetailsView/ShowEpisodesDetailsView';
import Loader from '../Loader/Loader';
import './ShowEpisodesDetails.css';

function ShowEpisodesDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [showEpisodesDetailsInfo, setShowEpisodesDetailsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getShowDetailsInfo = async () => {
      const episodesTab = [];
      const data = await getShowsInfoById(id);

      episodesTab.push(data);
      setShowEpisodesDetailsInfo(episodesTab);
    };
    getShowDetailsInfo();

    setLoadingState(false);
  }, [id]);

  return (
    <>
      <section className="show-details__container">
        {!isLoading ? (
          <div className="container">
            {showEpisodesDetailsInfo.map(({ basic, episodes, seasons }) => (
              <ShowEpisodesDetailsView key={basic.id} basic={basic} episodes={episodes} seasons={seasons} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default ShowEpisodesDetails;
