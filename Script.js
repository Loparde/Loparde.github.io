function TextOutput()
{
    alert("pressed");
}

function ChangeTab(event, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    event.currentTarget.className += " active";
}

function SendEmail() {
    //var email = document.getElementById("Email").children[0].value;
    var subject = document.getElementById("Subject").children[0].value;
    var message = document.getElementById("Content").children[0].value;
    var ref = "mailto:lucabuchner.official@gmail.com?subject="+ subject + "&body=" + message;
    window.location.href = ref;
}