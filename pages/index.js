import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/utils/index';
import { EventList } from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
/////////////////////////////////////////////////////////////////////////////////

const HomePage = (props) => (
  <>
    <Head>
      <title> Next JS App</title>
      <meta description='About our events' content='You could found here more information' />
    </Head>
    <NewsletterRegistration />
    <EventList events={props.events} />
  </>
);

export async function getStaticProps() {
  const allEvents = await getFeaturedEvents();

  return { props: { events: allEvents }, revalidate: 1800 };
};

export default HomePage;
