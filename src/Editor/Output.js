import React from 'react';

// 出力欄のコンポーネント
const Output = (props) => {
    const output = props.output;

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleChangeSelect = (e) => {
        return props.changeSelect((e.target.value === "true") ? true : false );
    }

    return (
        <div className="output">
            <h2>出力</h2>
            <textarea id="outputArea" name="outputArea" className="form-control bg-dark text-light" placeholder="ここに人物設定書の完成文が出力されますので、コピペしてください。" value={output} onChange={handleChange} />
            <div className="navi">
                <div>
                    <button id="select" className="btn btn-secondary">全選択</button>
                    <select id="paragraph" name="paragraph" onChange={handleChangeSelect} >
                        <option value="true">改行あり</option>
                        <option value="false">改行なし</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Output;