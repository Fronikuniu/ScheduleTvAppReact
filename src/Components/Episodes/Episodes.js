import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getEpisodeInfo, getShowsInfoById } from '../Requests/Requests';
import EpisodesView from '../EpisodesView/EpisodesView';
import Loader from '../Loader/Loader';
import './Episodes.css';

function Episodes() {
  const [isLoading, setLoadingState] = useState(true);
  const [showData, setShowData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);
  const { id } = useParams();
  const { episodeid } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getShowDetailsInfo = async () => {
      const showTab = [];
      const data = await getShowsInfoById(id);

      showTab.push(data);
      setShowData(showTab);
    };
    getShowDetailsInfo();

    getEpisodeInfo(episodeid)
      .then((episodeResponse) => {
        const { data } = episodeResponse;
        setEpisodeData(data);
      })
      .catch((error) => {});

    setLoadingState(false);
  }, [id, episodeid]);

  return (
    <>
      <section className="episodes__container">
        {!isLoading ? (
          <div className="container">
            {showData.map(({ basic }) => (
              <EpisodesView key={basic.id} basic={basic} episodeData={episodeData} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default Episodes;
