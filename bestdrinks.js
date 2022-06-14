document.getElementById("searchstart").onclick = function() {
    var initial = document.getElementById("searchbox").value;
    var transform1 = initial.toLowerCase();
    var transform2 = transform1.replace(/ /g, "");
    var suchbegriff = transform2;

    console.log(suchbegriff);

    if(suchbegriff == "") {
        return true;
    }

    window.location.hash = suchbegriff;

}