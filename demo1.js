function button() {
    alert("按钮被点击了!");
}

window.onload = function() {
    var obj = document.getElementById("button");
    if (obj != undefined) {
        obj.addEventListener("click", function() {
            button();
        }, false)
    }
}
