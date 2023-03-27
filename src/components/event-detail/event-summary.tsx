import classes from './event-summary.module.css';

interface EventSummary {
    title: string;
}

function EventSummary(props: EventSummary) {
    const { title } = props;

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;