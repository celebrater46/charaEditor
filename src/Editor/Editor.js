import React from 'react';
import Header from "./Header";
import Control from "./Control";
import TextAreas from "./TextAreas";
import Output from "./Output";

const Editor = () => {
    // const h1Style = { color: "#fff" };
    return (
        <div className="container">
            <Header />
            <Control />
            <TextAreas />
            <Output />
        </div>
    );
}

export default Editor;