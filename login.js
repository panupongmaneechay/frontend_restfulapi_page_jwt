var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
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
      console.log(objects);
      if (objects['status'] == 'success') {
        localStorage.setItem("jwt", objects['accessToken']);
        //Swal == SweetAlert Show
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed === true) {
            window.location.href = './index.html';
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  };
  return false;

}