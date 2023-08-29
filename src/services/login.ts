const EMAIL_KEY_NAME = 'Email';

export const getEmail = (): string => {
  const userEmail = localStorage.getItem(EMAIL_KEY_NAME);
  return userEmail ?? '';
};

export const saveEmail = (email: string) => {
  localStorage.setItem(EMAIL_KEY_NAME, email);
};

export const dropEmail = (): void => {
  localStorage.removeItem(EMAIL_KEY_NAME);
};
