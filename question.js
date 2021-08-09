function turn_display() {
    name_one = localStorage.getItem("name_1");
    name_two = localStorage.getItem("name_2");
    document.getElementById("question").innerHTML = "<h3>" + "Question turn: " + name_one + "</h3>";
    document.getElementById("answer").innerHTML = "<h3>" + "Answer turn: " + name_two + "</h3>";
}

function back() {
    window.location = "index.html";
}