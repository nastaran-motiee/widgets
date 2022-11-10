import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        event.preventDefault();
    };

    return (
        <a className={className} href={href} onClick = {onClick}>
            {children}
        </a>
    );
};

export default Link;