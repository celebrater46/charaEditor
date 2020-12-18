import React from 'react';

// タイトルの下にある機能ボタン
const Control = (props) => {
    const saveData = () => {
        return props.saveData();
    }

    const restoreData = () => {
        return props.restoreData();
    }

    const toggleSave = () => {
        console.log("toggleSave() in Control.js is workings.");
        return props.toggleSave();
    }

    return (
        <div id="btnSave">
            <button id="save" className="btn btn-secondary data" onClick={() => saveData()} >データの保存</button>
            <label>
                <div className="autoSave">
                    <input id="autoSave" type="checkbox" name="autoSave" onChange={()=> toggleSave()} />
                    <div>自動保存機能を有効にする（1分毎、名前入力必須）</div>
                </div>
            </label>
            <div>↓ 名前を入力してから押してください</div>
            <button id="restore" className="btn btn-secondary data" onClick={() => restoreData()} >データの復元</button>
        </div>
    );
}

export default Control;