import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Control from "./Control";
import TextAreas from "./TextAreas";
import Output from "./Output";
import getItems from "./modules/getItems";
import consoleLog from "../static/consoleLog";

// エラーログ用
const nameOfComponent = "Editor";

const Editor = () => {
    const items = getItems();
    const [texts, setTexts] = useState([...Array(items.items.length).keys()]);
    useEffect(() => consoleLog([texts], "texts", "Editor", nameOfComponent, false), [texts]);
    // const h1Style = { color: "#fff" };
    const setTextsArray = (key, value) => {
        setTexts(texts.splice(key, key, value));
    }

    return (
        <div className="container">
            <Header />
            <Control />
            <TextAreas items={items} setTexts={(key, value) => setTextsArray(key, value)} />
            <Output />
        </div>
    );
}

export default Editor;