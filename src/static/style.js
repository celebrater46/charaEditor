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
    h2 {
        font-size: 1.5rem;
        text-align: left;
    }
    div {
        margin: 0;
        padding: 0;
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
    div#btnSave {
        margin: 0 auto 20px;
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
    div.double, div.quarter {
        display: flex;
        padding: 10px;
    }
    div.double > input, div.quarter > input {
        height: 35px;
        flex: 1;
    }
    div.double > h2, div.quarter > h2 {
        width: 80px;
        margin: 5px auto auto 0;
    }
    div.single {
        padding: 30px 10px 0;
    }
    div.single > textarea {
        height: 120px;
    }

    @media (min-width:800px) {
        img.top {
            width: 1000px;
        }
    }
`}</style>