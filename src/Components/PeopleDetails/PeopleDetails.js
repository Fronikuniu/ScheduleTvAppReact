import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPeopleInfoById } from '../Requests/Requests';
import PeopleDetailsView from '../PeopleDetailsView/PeopleDetailsView';
import Loader from '../Loader/Loader';
import './PeopleDetails.css';

function PeopleDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [peopleDetailsInfo, setPeopleDetailsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getPeopleDetailsInfo = async () => {
      const peopleTab = [];
      const { data } = await getPeopleInfoById(id);

      peopleTab.push(data);
      setPeopleDetailsInfo(peopleTab);
    };
    getPeopleDetailsInfo();

    setLoadingState(false);
  }, [id]);

  return (
    <>
      <section className="details__container">
        {!isLoading ? (
          <div className="container">
            {peopleDetailsInfo.map((peopleInfo) => (
              <PeopleDetailsView key={peopleInfo.id} peopleInfo={peopleInfo} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default PeopleDetails;
