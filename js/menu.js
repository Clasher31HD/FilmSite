function myFunction() {
    var x = document.getElementsByClassName("main-navigation");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}