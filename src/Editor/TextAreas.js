import React from 'react';
import getItems from "./modules/getItems";
import TextArea from "./TextArea";

const TextAreas = () => {
    // const textAreas = getTextAreas();
    const items = getItems();
    const textAreas = (() => {
        let components = [];
        let i = 1;
        for(let item of items.items) {
            components.push(<TextArea id={i} name={item.name} title={item.title} size={item.size} placeHolder={items.placeHolder[item.name]} />);
            i++;
        }
    })();

    return <>{ textAreas }</>;
}

export default TextAreas;