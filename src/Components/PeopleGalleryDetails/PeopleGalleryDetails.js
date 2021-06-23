import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPeopleInfoById } from '../Requests/Requests';
import PeopleDetailsViewMenu from '../PeopleDetailsViewMenu/PeopleDetailsViewMenu';
import Ads from '../Ads/Ads';
import Loader from '../Loader/Loader';
import './PeopleGalleryDetails.css';

function PeopleGalleryDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [peopleGalleryDetailsInfo, setPeopleGalleryDetailsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getPeopleGalleryDetailsInfo = async () => {
      const personGalleryTab = [];
      const { data } = await getPeopleInfoById(id);

      personGalleryTab.push(data);
      setPeopleGalleryDetailsInfo(personGalleryTab);
    };
    getPeopleGalleryDetailsInfo();

    setLoadingState(false);
  }, [id]);

  return (
    <>
      <section className="details__container">
        {!isLoading ? (
          <>
            {peopleGalleryDetailsInfo.map((peopleInfo) => (
              <div key={peopleInfo.id} className="container">
                <div className="details-view">
                  <h1>{peopleInfo.name} - Gallery</h1>

                  <PeopleDetailsViewMenu peopleInfo={peopleInfo} />

                  <div className="people-details-view__display">
                    <img className="people-gallery-details" src={peopleInfo.image.original} alt={peopleInfo.name} />
                  </div>
                </div>
                <aside className="details-view__aside">
                  <Ads />
                </aside>
              </div>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}

export default PeopleGalleryDetails;
