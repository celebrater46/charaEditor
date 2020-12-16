import React from 'react';

const TextArea = (props) => {
    return (
        <div className={props.size}>
            <h2>{ props.title }</h2>
            <textarea id={props.id} name={props.name} placeholder={props.placeHolder} ></textarea>
        </div>
    );
}

export default TextArea;