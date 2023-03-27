import classes from './error-alert.module.css';

interface ErrorAlert {
    children: object
}

function ErrorAlert(props: ErrorAlert) {
    return <div className={classes.alert}><>{props.children}</></div>;
}

export default ErrorAlert;