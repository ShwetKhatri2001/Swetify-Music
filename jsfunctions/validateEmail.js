function validateEmail() {
    var email = document.getElementById('EMAIL').value;
    console.log(email);
    var error = document.getElementById('error');
    if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      error.innerHTML = "Please Enter a Valid Email Id";
      error.style.color = "red";
      return false;
    }
    error.innerHTML = "✅ ";
    return true;
  }

  function Checkdata() {
    var fname = document.getElementById("FNAME").value;
    var lname = document.getElementById("LNAME").value;
    var email = document.getElementById("EMAIL").value;
    var text = document.getElementById("TEXT").value;
    if (!fname || !lname || !email || !text) {

      Swal.fire("Please Fill the data", "", "info");
    }
  }

