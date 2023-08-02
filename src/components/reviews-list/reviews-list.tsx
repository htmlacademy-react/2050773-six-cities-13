import Review from '../review/review';
import { TReview } from '../../types/review';

type ReviewsListProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return(
    <ul className="reviews__list">
      <Review reviews={reviews} />
    </ul>
  );
}

export default ReviewsList;
