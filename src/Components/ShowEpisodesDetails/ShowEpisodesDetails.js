import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowEpisodesDetailsView from '../ShowEpisodesDetailsView/ShowEpisodesDetailsView';
import './ShowEpisodesDetails.css';

function ShowEpisodesDetails() {
  const [showEpisodesDetailsInfo, setShowEpisodesDetailsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getShowDetailsInfo = async () => {
      const episodesTab = [];
      const data = await getShowsInfoById(id);

      episodesTab.push(data);
      setShowEpisodesDetailsInfo(episodesTab);
    };
    getShowDetailsInfo();
  }, [id]);

  console.log(showEpisodesDetailsInfo);

  return (
    <>
      <section className="show-details__container">
        <div className="container">
          {showEpisodesDetailsInfo.map(({ basic, episodes, seasons }) => (
            <ShowEpisodesDetailsView key={basic.id} basic={basic} episodes={episodes} seasons={seasons} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ShowEpisodesDetails;
