export const saveData = (obj) => {
    const setJson = JSON.stringify(obj);
    const name = obj[0]["value"];
    localStorage.setItem(name, setJson);
    console.log("Data is saved. obj: ");
    console.log(obj);
}

// データ復元
export const getJsonData = (name) => {
    if(name === "") { alert("名前を入力してください"); return; }
    const getJson = localStorage.getItem(name);
    const obj = JSON.parse(getJson);
    return obj;
};