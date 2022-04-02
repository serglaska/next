import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { EventList } from '../../components/events/event-list';
import { getFilteredEvents } from '../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import { Button } from '../../components/ui';
import ErrorAlert from '../../components/ui/error-alert';
///////////////////////////////////////////////////

const FilteredEvents = () => {
  const router = useRouter();

  const urlData = router.query.slug;
  if (!urlData) return <p>Loading...</p>;
  const year = Number(urlData[0]);
  const month = Number(urlData[1]);

  if (isNaN(year) || isNaN(month) || year < 2020 || year > 2030 || month < 1 || month > 12) return (
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
  const filteredEvents = getFilteredEvents({ year, month });

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

  const date = new Date(year, month - 1);

  return <Fragment>
    <ResultsTitle date={date} />
    <EventList events={filteredEvents} />
  </Fragment>
};
export default FilteredEvents;
