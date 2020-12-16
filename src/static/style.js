export default <style>{`
    html {
        font-size: 14px;
    }
    body {
        background-color: #333;
        color: #ccc;
        margin: 0 10px;
    }
    h1 {
        font-size: 2.5rem;
        margin: 20px auto 20px;
    }
    label {
        text-align: center;
    }
    div.autoSave {
        display: flex;
        justify-content: center;
        margin: 15px auto;
    }
    div.autoSave > input, div.autoSave > div {
        height: 25px;
        margin: 0 2px;
    }
    button {
        width: 50vw;
        color: #ccc;
        background-color: #111;
        border-radius: 10px;
        margin: 20px auto;
    }
    button.data {
        font-size: 1.3rem;
    }

    @media (min-width:800px) {
        img.top {
            width: 1000px;
        }
    }
`}</style>