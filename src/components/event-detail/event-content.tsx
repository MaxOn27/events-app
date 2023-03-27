import classes from './event-content.module.css';

interface EventContent {
    children: object
}

function EventContent(props: EventContent) {
    return (
        <section className={classes.content}>
            <>
                {props.children}
            </>
        </section>
    );
}

export default EventContent;