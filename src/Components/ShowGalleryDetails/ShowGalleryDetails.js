import './ShowGalleryDetails.css';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import Ads from '../Ads/Ads';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';

function ShowGalleryDetails() {
  const [galleryView, setGalleryView] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getGalleryById = async () => {
      const galleryTab = [];
      const data = await getShowsInfoById(id);

      galleryTab.push(data);
      console.log(galleryTab);
      setGalleryView(galleryTab);
    };
    getGalleryById();
  }, [id]);

  return (
    <>
      {galleryView.map(({ basic, images }) => {
        return (
          <section key={basic.id} className="show-details__container">
            <div className="container">
              <div className="show-details-view">
                <h1>{basic.name} - Gallery</h1>
                <ShowDetailsViewMenu basic={basic} />
                <div className="show-gallery-view__display">
                  {images.map((image) => {
                    return (
                      <img
                        key={image.id}
                        src={
                          image.resolutions != null
                            ? image.resolutions.medium != null
                              ? image.resolutions.medium.url
                              : image.resolutions.original.url
                            : ''
                        }
                        alt={image.type}
                      />
                    );
                  })}
                </div>
              </div>

              <aside className="show-details-view__aside">
                <Ads />
              </aside>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ShowGalleryDetails;
