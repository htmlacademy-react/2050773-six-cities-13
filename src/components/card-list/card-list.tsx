import Card from '../card/card';
import { TOffer } from '../../types/offer';

type CardListProps = {
  offers: TOffer[];
  onCardHover: (offer: TOffer) => void;
}

function CardList({offers, onCardHover}: CardListProps): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} onCardHover={onCardHover} />)}
    </div>
  );
}

export default CardList;
