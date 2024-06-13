export const JakartaTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
  timeZone: 'Asia/Jakarta',
});

export const daysUntilBirthday = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  let nextBirthday = new Date(currentYear, 7, 30); // August is 7 (0-indexed)

  if (now > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, 7, 30);
  }

  const timeDiff = nextBirthday.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};
