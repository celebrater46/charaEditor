import React, { useState, useMemo } from 'react';
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
    // const [texts, setTexts] = useState([...Array(items.items.length).keys()]);
    const [texts, setTexts] = useState(Array(items.items.length));
    // const output = useMemo(() => { 
    //     const _texts = texts.join("\n");
    //     consoleLog([_texts], "_texts", "Editor", nameOfComponent, false);
    //     return _texts;
    // }, [texts]);
    const [output, setOutput] = useState("");
    // useEffect(() => consoleLog([texts], "texts", "Editor", nameOfComponent, false), [texts]);
    // const h1Style = { color: "#fff" };
    const setTextsArray = (id, value) => {
        consoleLog([id, value], "id, value", "Editor", nameOfComponent, false);
        let _texts = texts;
        _texts[id] = value;
        setTexts(_texts);
        setOutput(_texts.join("\n"));
        consoleLog([texts, output], "texts, output", "Editor", nameOfComponent, false)
    }

    return (
        <div className="container">
            <Header />
            <Control />
            <TextAreas items={items} setTexts={(id, value) => setTextsArray(id, value)} />
            <Output output={output} />
        </div>
    );
}

export default Editor;