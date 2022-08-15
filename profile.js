var jwt = localStorage.getItem("jwt");
var username = localStorage.getItem("username");
var fname = localStorage.getItem("firstname");
var lname = localStorage.getItem("lastname");
var tel = localStorage.getItem("tel");
var email = localStorage.getItem("email");
var picture = localStorage.getItem("picture");
console.log(username,fname)
if (jwt == null) {
  window.location.href = './login.html'
}


// function updateprofile() {
//     const tel = document.getElementById("tel").value;
//     const fname = document.getElementById("fname").value;
//     const lname = document.getElementById("lname").value;
//     const email = document.getElementById("email").value;
//     const picture = document.getElementById("picture").value;
//     var data = new FormData();
//     data.append("tel", tel);
//     data.append("fname", fname);
//     data.append("lname", lname);
//     data.append("email", email);
//     data.append("picture", picture);
//     data.append("username", username);

//     var xhttp = new XMLHttpRequest();
//     xhttp.withCredentials = true;

//     xhttp.addEventListener("readystatechange", function() {
//       if(this.readyState === 4) {
//         console.log(this.responseText);
//       }
//     });

//     xhttp.open("POST", "http://localhost:8081/token/v1/profile/update");
//     xhttp.setRequestHeader("token", jwt);

//     xhttp.send(data);
// }


function UserProfile() {
          // document.getElementById("fname").innerHTML = user["fname"];
          document.getElementById("firstname").innerHTML = "First Name : " + fname;
          document.getElementById("lastname").innerHTML ="Last Name : " +  lname;
          document.getElementById("tel").innerHTML ="TEL : " +  tel;
          document.getElementById("email").innerHTML ="E-mail : " +  email;
          document.getElementById("picture").innerHTML = "<img class =" + '"center"' + "id=" + '"picture"' + "src =" + '"' + picture + '">'
        //   <img class ="center" id="picture" src="picture">
  }
  
UserProfile();
console.log("Edit Profile Page")