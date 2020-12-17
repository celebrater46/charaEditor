import React from 'react';

const TextArea = (props) => {
    const input = (props.size !== "single") ? 
        <input id={props.id} name={props.name} placeholder={props.placeHolder} className={props.size + " form-control bg-dark text-light"} /> : 
        <textarea id={props.id} name={props.name} placeholder={props.placeHolder} className={props.size + " form-control bg-dark text-light"} ></textarea>;

    return (
        <div className={props.size}>
            <h2>{ props.title }</h2>
            { input }
        </div>
    );
}

export default TextArea;