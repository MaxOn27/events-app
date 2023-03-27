import { getFeaturedEvents } from '@/helpers/api-utils';
import EventList from '../components/events/event-list';

interface HomePage {
    date: string;
    isFeatured: boolean;
    description: string;
    id: string;
    image: string;
    location: string;
    title: string;
}

function HomePage(
    {events}: {
        events: HomePage[]
    }) {

    return (
        <div>
            <EventList items={events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
}

export default HomePage;