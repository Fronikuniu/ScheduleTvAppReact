import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import './ShowEpisodesDetailsGuide.css';
import Ads from '../Ads/Ads';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';

function ShowEpisodesDetailsGuide() {
  const [episodesListGuide, setEpisodesListGuide] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getShowDetailsInfo = async () => {
      const guideTab = [];
      const data = await getShowsInfoById(id);

      guideTab.push(data);
      setEpisodesListGuide(guideTab);
    };
    getShowDetailsInfo();
  }, [id]);

  console.log(episodesListGuide);

  return (
    <>
      {episodesListGuide.map(({ basic, episodes }) => {
        return (
          <section key={basic.id} className="show-details__container">
            <div className="container">
              <div className="show-details-view">
                <h1>{basic.name} - Episodes Guide</h1>
                <ShowDetailsViewMenu basic={basic} />
                <div className="show-episodes-details-view__display">
                  {episodes.map((episode) => {
                    function createMarkup() {
                      return { __html: episode.summary };
                    }

                    return (
                      <div key={episode.id} className="episode-details-guide-item">
                        <h4>{episode.name}</h4>

                        <p className="episode-details-guide-item-episode-info">
                          Episode:
                          <span>
                            {episode.season < 10 ? ` S0${episode.season}` : ` S${episode.season}`}
                            {episode.number < 10 ? ` E0${episode.number} ` : ` E${episode.number} `}
                          </span>
                          {'{-}'} Airdate:
                          <span>{` ${episode.airdate}`}</span>
                        </p>

                        <div className="episode-details-guide-item-episode-summary">
                          {episode.image != null ? (
                            <img src={episode.image.medium} alt={`Episode ${episode.number} img`}></img>
                          ) : (
                            <img src={placeholder} alt={`Placeholder img`} className="placeholder-episodes"></img>
                          )}

                          <span dangerouslySetInnerHTML={createMarkup()}></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="show-details-view__aside">
                <Link to={`/search/show/${basic.id}/episodes`}>
                  <button className="change-episode__list__guide">
                    <span className="material-icons">list</span> Episodes List
                  </button>
                </Link>

                <Ads />
              </aside>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ShowEpisodesDetailsGuide;
