import { Fragment } from 'react';
import Comments from '../../components/input/comments';
import { allEvents, getEventById } from '../../helpers/utils/index';
import EventContent from '../../components/event-detail/event-content';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
////////////////////////////////////////////////////////////////////////////

const EventDetail = (props) => {
  const { selectedEvent } = props;
  if (!selectedEvent) {
    return <p>Loading...</p>
  }

  return <Fragment>
    <EventSummary title={selectedEvent.title} />
    <EventLogistics
      date={selectedEvent.date}
      image={selectedEvent.image}
      imageAll={selectedEvent.title}
      address={selectedEvent.location} />
    <EventContent>
      <p>{selectedEvent.description}</p>
    </EventContent>
    <Comments eventId={selectedEvent.id} />
  </Fragment>
};

export default EventDetail;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
};

export async function getStaticPaths() {
  const events = await allEvents();
  const paths = events.map(element => ({ params: { eventId: element.id } }));

  return { paths: paths, fallback: false }
};
