export const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
};

export function formatDate(date: Date, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, dateFormatOptions).format(date);
}
