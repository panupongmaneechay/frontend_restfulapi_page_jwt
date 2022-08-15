
var jwt = localStorage.getItem("jwt");
var username = localStorage.getItem("username");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser() {
  const xhttp = new XMLHttpRequest();
  console.log(username)
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
            // document.getElementById("article").innerHTML = objects["recordset"][i]["article"]  ;
            // document.getElementById("updateuser").innerHTML = "create when "+objects["recordset"][i]["createupdate"]+ "  by " + objects["recordset"][i]["updateusername"];
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

function logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  window.location.href = './login.html'
}

