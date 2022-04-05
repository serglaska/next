import { useRouter } from 'next/router';
import { getFeaturedEvents } from "../../helpers/utils/index";
import { EventList } from "../../components/events/event-list";
import { EventsSearch } from "../../components/events/events-search-form";

const AllEventsPage = (props) => {
  const { events } = props;
  const router = useRouter();

  const onSearch = ({
    yearValue, monthValue
  }) => {
    router.push(`events/${yearValue}/${monthValue}`)
  }

  return <div className='center'>
    <h1>All Events</h1>
    <EventsSearch onSearch={onSearch} />
    <EventList events={events} />
  </div>
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      events: events
    },
    revalidate: 60
  }
};

export default AllEventsPage;
