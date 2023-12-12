let navbar_area = $("#navbar-area");

fetch("../navbar.html")
    .then((res) => res.text())
    .then((text) => navbar_area.append(text))
    .catch((e) => console.error(e));