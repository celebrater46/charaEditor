import React, { useState, useMemo, useEffect } from 'react';
import Header from "./Header";
import Control from "./Control";
import TextAreas from "./TextAreas";
import Output from "./Output";
import getItems from "./modules/getItems";
import consoleLog from "../static/consoleLog";

// エラーログ用
const nameOfComponent = "Editor";

// const getTexts = () => {

// }

const Editor = () => {
    const items = getItems();
    // const [texts, setTexts] = useState([...Array(items.items.length).keys()]);
    // const [texts, setTexts] = useState(Array(items.items.length));
    const [texts, setTexts] = useState(items.items);
    // const output = useMemo(() => { 
    //     const _texts = texts.join("\n");
    //     consoleLog([_texts], "_texts", "Editor", nameOfComponent, false);
    //     return _texts;
    // }, [texts]);
    const [output, setOutput] = useState("");
    useEffect(() => consoleLog([texts], "texts", "Editor", nameOfComponent, false), [texts]);
    // const h1Style = { color: "#fff" };

    const unifyTexts = (texts) => {
        let result = [];
        for(const text of texts) {
            if(text.text !== "") { result.push(text.text); }
        }
        // if(result.length === 1) { result.push(""); }
        return result;
        // return texts.map((text) => text.text);
    }

    const setTextsArray = (id, value) => {
        let _texts = texts;
        consoleLog([id, value, _texts], "id, value, _texts", "Editor", nameOfComponent, false);
        _texts[id]["text"] = value;
        setTexts(_texts);
        const __texts = unifyTexts(_texts);
        // setOutput(unifyTexts(_texts).join("\n"));
        consoleLog([__texts], "__texts", "Editor", nameOfComponent, false);
        setOutput(() => (__texts.length > 1) ? __texts.join("\n") : __texts[0] );
        // setOutput(__texts.join("\n"));
        consoleLog([texts, output], "texts, output", "Editor", nameOfComponent, false)
    }

    return (
        <div className="container">
            <Header />
            <Control />
            <TextAreas items={items} setTexts={(id, value) => setTextsArray(id, value)} />
            {/* <Output texts ={texts} /> */}
            <Output output={output} />
        </div>
    );
}

export default Editor;