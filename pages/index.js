import { getFeaturedEvents } from '../helpers/utils/index';
import { EventList } from '../components/events/event-list';

const HomePage = (props) => {

  return <>
    <EventList events={props.events} />
  </>
};

export default HomePage;

export async function getStaticProps() {
  const allEvents = await getFeaturedEvents();

  return { props: { events: allEvents }, revalidate: 1800 };
};
