import React from 'react';

const Output = () => {
    return (
        <div className="output">
            <h2>出力</h2>
            <div className="navi">
                <div>
                    <button id="output" className="btn btn-secondary mx-2">出力</button>
                    <button id="select" className="btn btn-secondary">全選択</button>
                </div>
                <select id="paragraph" name="paragraph">
                    <option value="false" selected>改行なし</option>
                    <option value="true">改行あり</option>
                </select>
            </div>
            <textarea id="outputArea" name="outputArea" className="form-control bg-dark text-light" placeholder="ここに人物設定書の完成文が出力されますので、コピペしてください。"></textarea>
        </div>
    );
}

export default Output;