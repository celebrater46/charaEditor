import React from 'react';
import TextArea from "./TextArea";

const TextAreas = (props) => {
    // const textAreas = getTextAreas();
    const items = props.items;

    const setTexts = (key, value) => {
        return props.setTexts(key, value);
    }

    const textAreas = (() => {
        let components = [];
        let i = 1;
        for(let item of items.items) {
            components.push(<TextArea key={i} name={item.name} title={item.title} size={item.size} placeHolder={items.placeHolder[item.name]} setTexts={(key, value) => setTexts(key, value)} />);
            i++;
        }
        return components;
    })();

    return <>{ textAreas }</>;
}

export default TextAreas;