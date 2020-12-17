import React, { useState, useMemo } from 'react';

const Output = (props) => {
    // const [textarea, setTextarea] = useState(props.output);
    // const [output, setOutput] = useState("");
    // const handleChange = (e) => {
    //     setTextarea(e.target.value);
    // }
    // const output = useMemo(() => props.texts.join("\n"), [props.texts]);
    const output = props.output;
    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="output">
            <h2>出力</h2>
            <div className="navi">
                <div>
                    <button id="output" className="btn btn-secondary mx-2">出力</button>
                    <button id="select" className="btn btn-secondary">全選択</button>
                </div>
                <select id="paragraph" name="paragraph">
                    <option value="false">改行なし</option>
                    <option value="true">改行あり</option>
                </select>
            </div>
            <textarea id="outputArea" name="outputArea" className="form-control bg-dark text-light" placeholder="ここに人物設定書の完成文が出力されますので、コピペしてください。" value={output} onChange={handleChange} />
            {/* <textarea id="outputArea" name="outputArea" className="form-control bg-dark text-light" placeholder="ここに人物設定書の完成文が出力されますので、コピペしてください。" value={output} onChange={handleChange} /> */}
        </div>
    );
}

export default Output;