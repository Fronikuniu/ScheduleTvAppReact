import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getShowsInfoById } from '../Requests/Requests';
import ShowDetailsViewMenu from '../ShowDetailsViewMenu/ShowDetailsViewMenu';
import Ads from '../Ads/Ads';
import Loader from '../Loader/Loader';
import './ShowGalleryDetails.css';

function ShowGalleryDetails() {
  const [isLoading, setLoadingState] = useState(true);
  const [galleryView, setGalleryView] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);

    const getGalleryById = async () => {
      const galleryTab = [];
      const data = await getShowsInfoById(id);

      galleryTab.push(data);
      setGalleryView(galleryTab);
    };
    getGalleryById();

    setLoadingState(false);
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

                {!isLoading ? (
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
                          alt={image.type != null ? image.type : 'Gallery img'}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <Loader />
                )}
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
