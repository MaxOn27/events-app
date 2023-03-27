import classes from './logistics-item.module.css';

interface LogisticsItem {
    children: object;
    icon: any;
}

function LogisticsItem(props: LogisticsItem) {
    const { icon: Icon } = props;

    return (
        <li className={classes.item}>
              <span className={classes.icon}>
                <Icon />
              </span>
              <span className={classes.content}><>{props.children}</></span>
        </li>
    );
}

export default LogisticsItem;