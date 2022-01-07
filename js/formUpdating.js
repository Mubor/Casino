//Обновление текста на странице
function updateForm(messagesObj, isFieldVisibile) {
    let field = document.getElementById("bet");

    if(isFieldVisibile) {
        field.style.display = "unset";
    }
    else {
        field.style.display = "none";
    }

    field.innerHTML = "";
    document.getElementById("wallet").innerHTML = messagesObj.wallet;
    document.getElementById("game-msg").innerHTML = messagesObj.msg;
    document.getElementById("toss-button").innerHTML = messagesObj.button;
}