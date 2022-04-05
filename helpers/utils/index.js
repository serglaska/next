export async function allEvents() {
  const dataSnapshot = await fetch('https://next-js-data-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const data = await dataSnapshot.json();

  return [data];
};

export async function getFeaturedEvents() {
  const date = await allEvents();
  return date;
};

export async function getEventById(id) {
  const date = await allEvents();
  return date.find((event) => event.id === id);
};

export async function getFilteredEvents(dateFilter) {
  const date = await allEvents();
  const { year, month } = dateFilter;

  let filteredEvents = date.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
};
