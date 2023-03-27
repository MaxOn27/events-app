import Link from "next/link";

import classes from "./Navigation.module.css";

function Navigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">Next Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/newEvent">Add new event</Link>
                    </li>
                    <li>
                        <Link href="/events">Browse all events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;