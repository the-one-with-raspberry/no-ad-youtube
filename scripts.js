function setID(link) {
    if (link == "https://youtu.be/\*") {
    var idslice = link.substr(17);
    idslice = "https://www.youtube.com/watch?v=" + idslice;
    document.getElementById("player").setAttribute("src", "https://www.youtube.com/embed/" + idslice);
    document.getElementById("id").value = "";
    }
    else {
    let idslice2 = link.substr(32);
    document.getElementById("player").setAttribute("src", "https://www.youtube.com/embed/" + idslice2);
    document.getElementById("id").value = "";
    }
}

/* https://www.youtube.com/watch?v=CorxeTtzYqU */