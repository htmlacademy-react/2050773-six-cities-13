import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '122',
    comment: 'Too dark and dirty...',
    date: '2023-06-26T21:00:00.436Z',
    rating: 1,
    user: {
      name: 'Mary',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/6.jpg',
      isPro: true,
    }
  },
  {
    id: '123',
    comment: 'Highly reccomend!',
    date: '2023-06-26T21:00:00.436Z',
    rating: 2,
    user: {
      name: 'Ilya',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/7.jpg',
      isPro: false,
    }
  }
];
