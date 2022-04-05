import { Fragment } from 'react';
import { Button } from '../../components/ui';
import { getFilteredEvents } from '../../helpers/utils';
import ErrorAlert from '../../components/ui/error-alert';
import { EventList } from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
/////////////////////////////////////////////////////////////////

const FilteredEvents = (props) => {
  if (props.hasError) return (
    <Fragment>
      <div className='center'>
        <Button link='/events'>
          Show all Events
        </Button>
      </div>
      <ErrorAlert>
        <p>Invalid date... Please, try again</p>
      </ErrorAlert>
    </Fragment>
  );
  const filteredEvents = props.filteredEvents;

  if (!filteredEvents || filteredEvents.length === 0) return (
    <Fragment>
      <ErrorAlert>
        <p>Not valid Events</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events'>
          Show all Events
        </Button>
      </div>
    </Fragment>
  )

  const date = new Date(props.date.year, props.date.month - 1);

  return <Fragment>
    <ResultsTitle date={date} />
    <EventList events={filteredEvents} />
  </Fragment>
};

export async function getServerSideProps(context) {
  const { params } = context;
  const urlData = params.slug;
  const year = Number(urlData[0]);
  const month = Number(urlData[1]);

  const filteredEvents = await getFilteredEvents({ year, month });

  if (isNaN(year) || isNaN(month) || year < 2020 || year > 2030 || month < 1 || month > 12) return {
    props: {
      hasError: true
    }
  };

  return {
    props: {
      filteredEvents: filteredEvents,
      date: {
        year: year,
        month: month
      }
    }
  }
}

export default FilteredEvents;
