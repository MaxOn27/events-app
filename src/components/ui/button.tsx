import Link from 'next/link';

import classes from './button.module.css';
import {MouseEventHandler} from "react";

interface Button {
    link?: any;
    children: any;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

function Button(props: Button) {
    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        );
    }

    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;