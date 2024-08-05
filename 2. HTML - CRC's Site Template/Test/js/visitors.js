var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("visits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://uhn4ff5i12.execute-api.us-east-1.amazonaws.com/Prod/resume", true);
xhttp.send();