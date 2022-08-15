var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {

  const username = document.getElementById("username").value;
  //panupong
  const password = document.getElementById("password").value;
  //maneechay

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:8081/token/v1/auth");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "username": username,
    "password": password
  }));


  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      if (objects['status'] == 'success') {
        localStorage.setItem("jwt", objects['accessToken']);
        localStorage.setItem("username", username);
        localStorage.setItem("firstname", objects['fname']);
        localStorage.setItem("lastname", objects['lname']);
        localStorage.setItem("tel", objects['tel']);
        localStorage.setItem("email", objects['email']);
        localStorage.setItem("picture", objects['picture']);
        //Swal == SweetAlert Show
        Swal.fire({
          text: objects['message'], //Success
          icon: 'success', 
          confirmButtonText: 'OK'
        }).then((result) => {
          window.location.href = './index.html';
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        }).then((result) => {
          window.location.href = './login.html';
      });
      }
    }
  };
  return false;

}
