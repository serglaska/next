import { useRouter } from 'next/router';
import { getFeaturedEvents } from "../dummy-data";
import { EventList } from "../../components/events/event-list";
import { EventsSearch } from "../../components/events/events-search-form";

const AllEventsPage = () => {
  const events = getFeaturedEvents();
  const router = useRouter();

  const onSearch = ({
    yearValue, monthValue
  }) => {
    router.push(`events/${yearValue}/${monthValue}`)
  }

  return <div>
    <h1>All Events</h1>
    <EventsSearch onSearch={onSearch} />
    <EventList events={events} />
  </div>
};

export default AllEventsPage;
