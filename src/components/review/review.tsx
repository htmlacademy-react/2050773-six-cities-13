import dayjs from 'dayjs';
import { TReview } from '../../types/review';
import { DateFormat } from '../../const';

type ReviewProps = {
  reviews: TReview[];
}

function Review({reviews}: ReviewProps): JSX.Element {
  return(
    <>
      {reviews.map((review) => {
        const {user, rating, comment, date} = review;
        console.log(rating);

        return (
          <li key={review.id} className='reviews__item'>
            <div className='reviews__user user'>
              <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                <img className='reviews__avatar user__avatar' src={user.avatarUrl} width={54} height={54} alt='Reviews avatar' />
              </div>
              <span className='reviews__user-name'>{user.name}</span>
              {user.isPro && <span className="offer__user-status">Pro</span>}
            </div>
            <div className='reviews__info'>
              <div className='reviews__rating rating'>
                <div className='reviews__stars rating__stars'>
                  <span style={{
                    width: '80%'
                  }}
                  >
                  </span>
                  <span className='visually-hidden'>{rating}</span>
                </div>
              </div>
              <p className='reviews__text'>{comment}</p>
              <time className='reviews__time' dateTime={dayjs(date).format(DateFormat.DATE_FORMAT)}>{dayjs(date).format(DateFormat.REVIEW_DATE_FORMAT)}</time>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Review;
