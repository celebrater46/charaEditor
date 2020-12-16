import React from 'react';
import Header from "./Header";
import Control from "./Control";
import TextAreas from "./TextAreas";

const Editor = () => {
    // const h1Style = { color: "#fff" };
    return (
        <>
            <Header />
            <Control />
            <TextAreas />
        </>
    );
}

export default Editor;