import { Fragment } from 'react';
import {GetStaticPaths, GetStaticProps} from "next";


import { getEventById, getFeaturedEvents } from '@/helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

interface EventDetailPage {
    date: string;
    isFeatured: boolean;
    description: string;
    id: string;
    image: string;
    location: string;
    title: string;
}

function EventDetailPage(
    {
        selectedEvent
    }:
        {
            selectedEvent: EventDetailPage;
        }) {
    const event = selectedEvent;

    if (!event) {
        return (
            <div className="center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params!;
    const event = await getEventById(params.eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const events = await getFeaturedEvents();

    const paths = events.map(event => ({ params: { eventId: event.id } }));

    return {
        paths: paths,
        fallback: 'blocking'
    };
}

export default EventDetailPage;