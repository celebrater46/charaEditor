export default <style>{`
    html {
        font-size: 16px;
    }
    body {
        background-color: #333;
        color: #ccc;
        margin: 0;
    }
    h1 {
        font-size: 2rem;
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
    div.container {
        width: 100vw;
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
        font-size: 1.3rem;
    }
    button.data {
        width: 50vw;
        margin: 20px auto;
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
    div.output {
        margin: 20px auto;
        padding: 10px;
    }
    div.output > div {
        display: flex;
        margin: 10px auto;
    }
    div.output button {
        flex: 1;
        margin: 0 5px 0 0;
    }
    div.output textarea {
        height: 250px;
    }

    @media (min-width:800px) {
        html {
            font-size: 1.5vw;
        }
        h1 {
            font-size: 2rem;
            margin: 30px auto 50px;;
        }
        h2 {
            font-size: 1.3rem;
        }
        div.container {
            width: 800px;
        }
        button.data {
            width: 25vw;
            margin: 30px auto;
        }
        div.autoSave > input, div.autoSave > div {
            height: 30px;
            margin: 0 4px;
        }
        div.double, div.quarter {
            padding: 20px 0;
        }
        div.double > input, div.quarter > input {
            height: 45px;
            flex: 1;
        }
        div.double > h2, div.quarter > h2 {
            width: 100px;
            margin: 5px auto auto 10px;
        }
        div.single > textarea {
            height: 180px;
        }
        div.output textarea {
            height: 350px;
        }
    }
`}</style>