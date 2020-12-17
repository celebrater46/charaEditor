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
    const [isBr, setIsBr] = useState(false);
    // const output = useMemo(() => { 
    //     const _texts = texts.join("\n");
    //     consoleLog([_texts], "_texts", "Editor", nameOfComponent, false);
    //     return _texts;
    // }, [texts]);
    const [output, setOutput] = useState("");
    useEffect(() => consoleLog([texts], "texts", "Editor", nameOfComponent, false), [texts]);
    // const h1Style = { color: "#fff" };

    const unifyTexts = (texts, isBr) => {
        const _items = items.items;
        let result = [];
        for(let i = 0; i < _items.length; i++) {
            // if(texts[i].text !== "") { result.push("【】" + texts[i].text) }
            if(texts[i].text !== "") { result.push("【" + _items[i].title + "】" + texts[i].text) }
            // { (texts[i].text !== "") && result.push("【" + items[i].title + "】" + texts[i].text) }
            consoleLog([texts[i].text, _items[i].title], "texts[i].text, _items[i].title", "unifyTexts", nameOfComponent, false);
        }
        // for(const text of texts) {
        //     { (text.text !== "") && result.push(text.text) }
        // }
        // if(result.length === 1) { result.push(""); }
        // return result;
        // return texts.map((text) => text.text);
        consoleLog([result], "result", "unifyTexts", nameOfComponent, false);
        setOutput(() => (result.length > 1) ? result.join((isBr) ? "\n" : "　" ) : result[0] );
    }

    const setTextsArray = (id, value) => {
        let _texts = texts;
        consoleLog([id, value, _texts], "id, value, _texts", "Editor", nameOfComponent, false);
        _texts[id]["text"] = value;
        setTexts(_texts);
        unifyTexts(_texts, isBr);
        // const __texts = unifyTexts(_texts);
        // setOutput(unifyTexts(_texts).join("\n"));
        // consoleLog([__texts], "__texts", "Editor", nameOfComponent, false);
        // setOutput(() => (__texts.length > 1) ? __texts.join("\n") : __texts[0] );
        // setOutput(__texts.join("\n"));
        consoleLog([texts, output], "texts, output", "Editor", nameOfComponent, false)
    }

    const changeSelect = (isBr) => {
        setIsBr(isBr);
        unifyTexts(texts, isBr);
    }

    return (
        <div className="container">
            <Header />
            <Control />
            <TextAreas items={items} setTexts={(id, value) => setTextsArray(id, value)} />
            {/* <Output texts ={texts} /> */}
            <Output output={output} changeSelect={(isBr) => changeSelect(isBr)} />
        </div>
    );
}

export default Editor;