import Card from '../../components/card/card.tsx';
// import Map from '../../components/map/map.tsx';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index/index.ts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNearbyOffersAction } from '../../store/api-actions.ts';
import { RequestStatus } from '../../const.ts';
import { Helmet } from 'react-helmet-async';
import NotFoundScreen from '../not-found-screen/not-found-screen.tsx';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import OfferDescription from '../../components/offer-description/offer-description.tsx';
// import { TReview } from '../../types/review.ts';
import { fetchOfferByIdAction } from '../../store/api-actions.ts';

function OfferScreen():JSX.Element {


  const {id} = useParams();
  const dispatch = useDispatch();
  const offer = useAppSelector((state) => state.offer);
  const closeCities = useAppSelector((state) => state.nearbyOffers).slice(0,3);
  const fetchingStatus = useAppSelector((state) => state.offerFetchingStatus);

  console.log('id', id);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferByIdAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [id, dispatch]);


  return (
    <div className="page">

      {fetchingStatus === RequestStatus.Error && <NotFoundScreen />}
      {fetchingStatus === RequestStatus.Pending && <LoadingScreen />}
      {fetchingStatus === RequestStatus.Success && offer && (
        <>
          <Helmet>
            <title>{`${offer.city.name}. ${offer.title}`}</title>
          </Helmet>

          <main className="page__main page__main--offer">
            <section className="offer">
              <OfferDescription offer={offer}  />
              <section className="offer__map map">
                {/* <Map offers={closeCities} selectedOffer={offer}/> */}
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  {closeCities.map((city) => <Card key={city.id} offer={city} />)}
                </div>
              </section>
            </div>
          </main>
        </>)}
    </div>
  );
}

export default OfferScreen;
