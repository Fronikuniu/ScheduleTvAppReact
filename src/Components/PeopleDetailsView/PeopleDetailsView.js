import { Link } from 'react-router-dom';
import Ads from '../Ads/Ads';
import PeopleDetailsViewMenu from '../PeopleDetailsViewMenu/PeopleDetailsViewMenu';
import placeholder from '../../assets/images/placeholder.jpg';
import './PeopleDetailsView.css';

function PeopleDetailsView({ peopleInfo }) {
  var today = new Date();
  var currentYear = today.getFullYear();

  return (
    <>
      <div className="details-view">
        <h1>{peopleInfo.name}</h1>

        <PeopleDetailsViewMenu peopleInfo={peopleInfo} />

        <div className="details-view__display">
          <div className="view">
            <img src={peopleInfo.image != null ? peopleInfo.image.medium : placeholder} alt={peopleInfo.name} />
            <Link to="" className="view__follow">
              <span className="material-icons">favorite_border</span>
              <span>Follow</span>
            </Link>
          </div>
          <div className="details-view__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum ullam quibusdam, at adipisci fugiat sequi doloremque incidunt quasi
              delectus ducimus saepe asperiores, debitis culpa repellat magni! Placeat quam, suscipit fuga a vero aperiam delectus perspiciatis est
              nisi? Corrupti, assumenda!
            </p>
          </div>
        </div>
      </div>

      <aside className="details-view__aside">
        <div className="details-view__aside__info">
          <h2>People Info:</h2>
          <h3>
            Gender: <span>{peopleInfo.gender != null ? peopleInfo.gender : 'No info'}</span>
          </h3>

          <h3>
            Age: <span>{peopleInfo.birthday != null ? currentYear - peopleInfo.birthday.slice(0, 4) : 'No info'}</span>
          </h3>

          <h3>
            Birthday: <span>{peopleInfo.birthday != null ? peopleInfo.birthday : 'No info'}</span>
          </h3>

          <h3>
            Born in:{' '}
            <span>
              {peopleInfo.country != null ? (
                <>
                  {`${peopleInfo.country.name} `}
                  <img
                    className="h1__flag"
                    src={`//static.tvmaze.com/intvendor/flags/${peopleInfo.country.code.toLowerCase()}.png`}
                    alt={peopleInfo.country.name}
                    title={peopleInfo.country.name}
                  />
                </>
              ) : (
                'No info'
              )}
            </span>
          </h3>
        </div>

        <Ads />
      </aside>
    </>
  );
}

export default PeopleDetailsView;
