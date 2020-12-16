import React from 'react';

const Control = () => {
    return (
        <p id="btnSave">
            <button id="save">データの保存</button>
            <label>
                <div className="autoSave">
                    <input id="autoSave" type="checkbox" name="autoSave" value="a" />
                    <div>自動保存機能を有効にする（1分毎、名前入力必須）</div>
                </div>
            </label>
            <div>↓ 名前を入力してから押してください</div>
            <button id="restore">データの復元</button>
        </p>
    );
}

export default Control;