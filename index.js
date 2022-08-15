
var jwt = localStorage.getItem("jwt");
var username = localStorage.getItem("username");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8081/token/v1/article/get");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("token",jwt);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      
      const objects = JSON.parse(this.responseText);
      if (objects["status"] == "success") {
        // document.getElementById("fname").innerHTML = user["fname"];
        document.getElementById("fname").innerHTML = username;
        if(objects["recordset"].length > 0){
          var updateuser = document.getElementById("article")
          for(let i = 0; objects["recordset"].length > i; i++){
            updateuser.innerHTML += ((i+1)+"."+" "+
            objects["recordset"][i]["article"] + "<br />"+"• create when "+
            objects["recordset"][i]["createupdate"]+ "  by " + 
            objects["recordset"][i]["updateusername"] + "<br />")

          }
        }
       
      }
    }
  };
}

loadUser();


function postcomments() {
      const article = document.getElementById("comment-box").value;
      var data = new FormData();
      data.append("updateusername", username);
      data.append("article", article);

      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true;

      xhttp.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhttp.open("POST", "http://localhost:8081/token/v1/article/create");
      xhttp.setRequestHeader("token", jwt);

      xhttp.send(data);
}


function logout() {
  // localStorage.removeItem("jwt");
  // localStorage.removeItem("username");
  // localStorage.removeItem("fname");
  // localStorage.removeItem("lname");
  // localStorage.removeItem("tel");
  // localStorage.removeItem("email");
  // localStorage.removeItem("picture");
  localStorage.clear();
  window.location.href = './login.html'
}

function editprofile() {
  window.location.href = './profile.html';
}

