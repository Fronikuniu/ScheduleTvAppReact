import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowDetailsView from '../ShowDetailsView/ShowDetailsView';
import './ShowDetails.css';

function ShowDetails() {
  const [showDetailsInfo, setShowDetailsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getShowDetailsInfo = async () => {
      const basicTab = [];
      const data = await getShowsInfoById(id);

      basicTab.push(data);
      setShowDetailsInfo(basicTab);
    };
    getShowDetailsInfo();
  }, [id]);

  return (
    <>
      <section className="show-details__container">
        <div className="container">
          {showDetailsInfo.map(({ basic, episodes, seasons }) => (
            <ShowDetailsView key={basic.id} basic={basic} episodes={episodes} seasons={seasons} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ShowDetails;
