import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Control from "./Control";
import TextAreas from "./TextAreas";
import Output from "./Output";
import getItems from "./modules/getItems";
import { saveData, getJsonData } from "./modules/saveData";
import consoleLog from "../static/consoleLog";

// エラーログ用
const nameOfComponent = "Editor";

// タイトルから出力テキストエリアまで
const Editor = () => {
    const items = getItems();
    const [texts, setTexts] = useState(items.items);
    const [isBr, setIsBr] = useState(true);
    const [autoSave, setAutoSave] = useState(false);
    const [output, setOutput] = useState("");
    useEffect(() => consoleLog([autoSave], "autoSave", "Editor", nameOfComponent, false), [autoSave]);

    // texts オブジェクトから文章を統合して出力欄に反映する
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
        _texts[id]["text"] = value;
        setTexts(_texts);
        unifyTexts(_texts, isBr);
    }

    // 改行ありと改行なしの切り替え
    const changeSelect = (isBr) => {
        setIsBr(isBr);
        unifyTexts(texts, isBr);
    }

    // 自動保存が有効の場合、60秒ごとにローカルストレージに保存
    useEffect(() => {
        let callAutoSave;
        if(autoSave) { callAutoSave = setInterval(() => saveData(texts), 60000); }
        return () => clearInterval(callAutoSave);
    }, [autoSave]);

    // データの復元
    const restoreData = () => {
        const obj = getJsonData();
        setTexts(obj);
        unifyTexts(obj, isBr);
        console.log("Data is restored.");
        consoleLog([obj, isBr], "obj, isBr", "restoreData", nameOfComponent, false);
    }

    return (
        <div className="container">
            <Header />
            <Control saveData={() => saveData(texts)} restoreData={() => restoreData()} toggleSave={() => setAutoSave(!autoSave)} />
            <TextAreas items={items} texts={texts} setTexts={(id, value) => setTextsArray(id, value)} />
            <Output output={output} changeSelect={(isBr) => changeSelect(isBr)} />
        </div>
    );
}

export default Editor;