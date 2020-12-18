import React from 'react';
import TextArea from "./TextArea";

// テキストエリアのコンポーネント（全部）
const TextAreas = (props) => {
    const items = props.items;

    const setTexts = (id, value) => {
        return props.setTexts(id, value);
    }

    const textAreas = (() => {
        let components = [];
        let i = 0;
        for(let item of items.items) {
            components.push(<TextArea key={i} id={i} name={item.name} title={item.title} size={item.size} placeHolder={items.placeHolder[item.name]} text={props.texts[i].text} setTexts={(id, value) => setTexts(id, value)} />);
            i++;
        }
        return components;
    })();

    return <>{ textAreas }</>;
}

export default TextAreas;