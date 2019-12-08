import React from 'react';

export function BBMButton(props) {
    return (
        <button className={`${props.style === 'secondary'?'bbm-secondary-btn':'bbm-primary-btn'} btn`} onClick={props.onClick}>
            {props.title}
        </button>
    );
}