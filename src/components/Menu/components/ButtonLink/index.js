import React from 'react';

function ButtonLink(props) {
    console.log(props)
    return (
        <header>
            <a className={props.className} href={props.href}>
                {props.children}
            </a>
        </header>
    );

}

export default ButtonLink;