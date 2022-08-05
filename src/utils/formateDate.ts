export const formateDate = (dateStr: string, locale: string) => {
    const date = new Date(dateStr);
    const day = date.getDay();
    const weekday = date.toLocaleString(locale, { weekday: 'short' });
    const month = date.toLocaleString(locale, { month: 'short' }).slice(0, -1);
    const year = date.getFullYear();

    return `${day} ${month} ${year}, ${weekday[0].toUpperCase() + weekday.slice(1)}`;
};