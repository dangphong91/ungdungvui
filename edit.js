let arr = ["W", "H", "O", " ", "A", "R", "E", " ", "Y", "O", "U", " ", "?"];
let i = 0;
function addtext() {
    if (i < arr.length) {
    document.getElementById("add").innerHTML += arr[i];
    i++;
    } else {
        document.getElementById("add").innerHTML = "";
        i = 0;
    }
}
window.addEventListener("keydown", addtext);