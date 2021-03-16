let arr = ["I", " ", "W", "I", "L", "L", " ", "K", "I", "L", "L", " ", "Y", "O", "U", " ", "(", "^", "_", "^", ")", " ", "!", "!", "!"];
let i = 0;
let x = "";
function addtext() {
    if (i < arr.length) {
        x = x + arr[i];
        document.getElementById("add").value = x;
        i++;
    } else {
        document.getElementById("add").value = "";
        i = 0;
        x = "";
    }
}
window.addEventListener("keydown", addtext);