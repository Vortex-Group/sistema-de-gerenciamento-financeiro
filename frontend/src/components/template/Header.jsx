import React, {Fragment} from "react";
import './Header.css';

const Header = props => {
    return (
        <Fragment>
            <header className="header" style={props.style}>
                <h1>{props.title}</h1>
            </header>
        </Fragment>
    )
};

export default Header;
    