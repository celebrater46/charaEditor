export const saveData = (obj) => {
    // let obj = getForm();
    const setJson = JSON.stringify(obj);
    const name = obj[0]["value"];
    // if(name === null) { name = "No Name"; }
    localStorage.setItem(name, setJson);
    console.log("Data is saved. obj: ");
    // console.log("obj from setJson:");
    console.log(obj);
}

// export const callAutoSave = (obj, isOn) => {
//     // let bool = $("#autoSave").prop("checked");
//     // console.log(bool);
//     if(isOn) { saveData(obj); }
//     setTimeout(callAutoSave, 1000);
// };

// データ復元
export const getJsonData = (name) => {
    // const name = $("#item_0").val();
    // console.log("name from restore" + name);
    if(name === "") { alert("名前を入力してください"); return; }
    const getJson = localStorage.getItem(name);
    const obj = JSON.parse(getJson);
    return obj;
    // for(let i = 0; i < items.length; i++) {
    //     let id = "#item_" + i;
    //     $(id).val(obj[i]["value"]);
    // }
    // console.log("obj from getJson:");
    // console.log(obj);
};