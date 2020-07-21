function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var title = document.forms["myForm"]["title"].value;
    var comment = document.forms["myForm"]["comment"].value;

    if (name == "" || email == "" || title == "" || comment ="") {
        alert("Bạn phải điền đầy đủ");
        return false;
    }
}