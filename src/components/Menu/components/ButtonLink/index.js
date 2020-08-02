import React from 'react';

function ButtonLink(props) {
    return (
        
        <a className={props.className} href={props.to}>
            {props.children}
        </a>
    );

}

export default ButtonLink;