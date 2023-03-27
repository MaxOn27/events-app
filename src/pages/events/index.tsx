import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '@/helpers/api-utils';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

interface AllEventsPage {
    date: string;
    isFeatured: boolean;
    description: string;
    id: string;
    image: string;
    location: string;
    title: string;
}

function AllEventsPage(
    {events}: {
        events: AllEventsPage[]
    }
) {
    const router = useRouter();

    function findEventsHandler({year, month}: {year: string, month: string}) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events,
        },
        revalidate: 60
    };
}

export default AllEventsPage;