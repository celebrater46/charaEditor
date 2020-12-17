import React from 'react';
import TextArea from "./TextArea";

const TextAreas = (props) => {
    // const textAreas = getTextAreas();
    const items = props.items;
    // const texts = props.texts;

    const setTexts = (id, value) => {
        return props.setTexts(id, value);
    }

    const textAreas = (() => {
        let components = [];
        let i = 0;
        for(let item of items.items) {
            components.push(<TextArea key={i} id={i} name={item.name} title={item.title} size={item.size} placeHolder={items.placeHolder[item.name]} setTexts={(id, value) => setTexts(id, value)} />);
            i++;
        }
        return components;
    })();

    return <>{ textAreas }</>;
}

export default TextAreas;