import EventItem from './event-item';
import classes from './event-list.module.css';

interface EventList {
    date: string;
    isFeatured: boolean;
    description: string;
    id: string;
    image: string;
    location: string;
    title: string;
}

function EventList(
    {
        items
    }: {
    items: Array<EventList>
}) {
    return (
        <ul className={classes.list}>
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                />
            ))}
        </ul>
    );
}

export default EventList;