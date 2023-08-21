type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

export type Comment = {
  comment: string;
  ratingData: number;
};
