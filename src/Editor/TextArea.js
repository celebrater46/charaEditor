import React from 'react';

const TextArea = (props) => {
    // const [value, setValue] = useState("");

    const handleChange = (e) => {
        return props.setTexts(props.id, e.target.value);
    }

    const input = (props.size !== "single") ? 
        <input id={props.id} name={props.name} placeholder={props.placeHolder} className={props.size + " form-control bg-dark text-light"} onChange={handleChange} /> : 
        <textarea id={props.id} name={props.name} placeholder={props.placeHolder} className={props.size + " form-control bg-dark text-light"} onChange={handleChange} ></textarea>;

    return (
        <div className={props.size}>
            <h2>{ props.title }</h2>
            { input }
            {/* <p>{ value }</p> */}
        </div>
    );
}

export default TextArea;