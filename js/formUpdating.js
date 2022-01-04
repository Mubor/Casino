//Обновление текста на странице
function updateForm(walletMsg, gameMsg, buttonText, isFieldVisibile) {
    let field = document.getElementById("bet");

    if(isFieldVisibile) {
        field.style.display = "unset";
    }
    else {
        field.style.display = "none";
    }

    field.innerHTML = "";
    document.getElementById("wallet").innerHTML = walletMsg;
    document.getElementById("game-msg").innerHTML = gameMsg;
    document.getElementById("toss-button").innerHTML = buttonText;
}