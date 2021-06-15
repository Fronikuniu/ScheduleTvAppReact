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
      const { basic } = await getShowsInfoById(id);

      basicTab.push(basic);
      setShowDetailsInfo(basicTab);
    };
    getShowDetailsInfo();
  }, [id]);

  console.log(showDetailsInfo);

  return (
    <>
      <section className="show-details__container">
        <div className="container">
          {showDetailsInfo.map((basic) => (
            <ShowDetailsView key={basic.id} basic={basic} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ShowDetails;
