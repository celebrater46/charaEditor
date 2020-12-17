import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Control from "./Control";
import TextAreas from "./TextAreas";
import Output from "./Output";
import getItems from "./modules/getItems";
import { saveData, getJsonData, autoSave } from "./modules/saveData";
import consoleLog from "../static/consoleLog";

// エラーログ用
const nameOfComponent = "Editor";

// タイトルから出力テキストエリアまで
const Editor = () => {
    const items = getItems();
    const [texts, setTexts] = useState(items.items);
    const [isBr, setIsBr] = useState(false);
    const [output, setOutput] = useState("");
    useEffect(() => consoleLog([texts], "texts", "Editor", nameOfComponent, false), [texts]);

    const unifyTexts = (texts, isBr) => {
        const _items = items.items;
        let result = [];
        for(let i = 0; i < _items.length; i++) {
            if(texts[i].text !== "") { result.push("【" + _items[i].title + "】" + texts[i].text) }
        }
        setOutput(() => (result.length > 1) ? result.join((isBr) ? "\n" : "　" ) : result[0] );
    }

    // テキストエリアに文章を入力したら配列に反映する（出力欄に自動出力）
    const setTextsArray = (id, value) => {
        let _texts = texts;
        consoleLog([id, value, _texts], "id, value, _texts", "Editor", nameOfComponent, false);
        _texts[id]["text"] = value;
        setTexts(_texts);
        unifyTexts(_texts, isBr);
    }

    // 改行ありと改行なしの切り替え
    const changeSelect = (isBr) => {
        setIsBr(isBr);
        unifyTexts(texts, isBr);
    }

    const restoreData = () => {
        const obj = getJsonData();
        setTexts(obj);
        // setTexts(getJsonData());
        unifyTexts(obj, isBr);
    }

    // 自動保存機能
    autoSave();

    return (
        <div className="container">
            <Header />
            <Control saveData={() => saveData(texts)} restoreData={() => restoreData()} />
            <TextAreas items={items} setTexts={(id, value) => setTextsArray(id, value)} />
            <Output output={output} changeSelect={(isBr) => changeSelect(isBr)} />
        </div>
    );
}

export default Editor;