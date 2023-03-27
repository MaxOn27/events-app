import {Fragment} from "react";
import Navigation from "./Navigation";

interface Layout {
    children: object;
}

function Layout(props: Layout) {
    return (
        <Fragment>
            <Navigation/>
            <main><>{props.children}</></main>
        </Fragment>
    );
}

export default Layout;