import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/utils/index';
import { EventList } from '../components/events/event-list';

const HomePage = (props) => {

  return <>
    <Head>
      <title> Next JS App</title>
      <meta description='About our events' content='You could found here more information' />
    </Head>
    <EventList events={props.events} />
  </>
};

export default HomePage;

export async function getStaticProps() {
  const allEvents = await getFeaturedEvents();

  return { props: { events: allEvents }, revalidate: 1800 };
};
