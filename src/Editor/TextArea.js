import React from 'react';

// テキストエリアのコンポーネント（ひとつ）
const TextArea = (props) => {
    // テキスト欄に入力したら親要素のイベント呼び出し
    const handleChange = (e) => {
        return props.setTexts(props.id, e.target.value);
    }

    const input = (props.size !== "single") ? 
        <input id={props.id} name={props.name} placeholder={props.placeHolder} className={props.size + " form-control bg-dark text-light"} value={props.text} onChange={handleChange} /> : 
        <textarea id={props.id} name={props.name} placeholder={props.placeHolder} className={props.size + " form-control bg-dark text-light"} value={props.text} onChange={handleChange} ></textarea>;

    return (
        <div className={props.size}>
            <h2>{ props.title }</h2>
            { input }
        </div>
    );
}

export default TextArea;