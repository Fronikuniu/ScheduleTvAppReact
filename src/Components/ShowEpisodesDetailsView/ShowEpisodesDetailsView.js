import Ads from '../Ads/Ads';
// import { Link } from 'react-router-dom';
// import placeholder from '../../assets/images/placeholder.jpg';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import './ShowEpisodesDetailsView.css';

function ShowEpisodesDetailsView({ basic, episodes, seasons }) {
  return (
    <>
      <div className="show-details-view">
        <h1>{basic.name} - Episodes list</h1>
        <ShowDetailsViewMenu basic={basic} />

        <div className="show-details-view__display">
          <div className="view">{episodes[0].name}</div>
        </div>
      </div>

      <aside className="show-details-view__aside">
        <Ads />
      </aside>
    </>
  );
}

export default ShowEpisodesDetailsView;
