import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import { Link } from 'react-router-dom';
import ShowEpisodesDetailsView from '../ShowEpisodesDetailsView/ShowEpisodesDetailsView';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import Loader from '../Loader/Loader';
import Ads from '../Ads/Ads';
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
      <section className="details__container">
        {!isLoading ? (
          <>
            {showEpisodesDetailsInfo.map(({ basic, episodes, seasons }) => (
              <div key={basic.id} className="container">
                <div className="details-view">
                  <h1>{basic.name} - Episodes list</h1>
                  <ShowDetailsViewMenu basic={basic} />

                  <div className="show-episodes-details-view__display">
                    <div className="show-episodes-details-view__display-seasons">
                      <h2>Seasons</h2>
                      <div className="seasons-data">
                        {seasons.map((season) => {
                          return (
                            <Link to="" key={season.id}>
                              {season.number < 10 ? `S0${season.number}` : `S${season.number}`}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <ShowEpisodesDetailsView key={basic.id} basic={basic} episodes={episodes} seasons={seasons} />
                  </div>
                </div>
                <aside className="details-view__aside">
                  <Link to={`/search/show/${basic.id}/episodesguide`}>
                    <button className="change-episode__list__guide">
                      <span className="material-icons-outlined">explore</span> Episodes Guide
                    </button>
                  </Link>

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

export default ShowEpisodesDetails;
