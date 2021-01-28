
/*Var declaration*/
var form_login = document.querySelector(".form_login");
var form_sing_up = document.querySelector(".form_sing-up");
var container_login_sing_up = document.querySelector(".container_login-sing-up")
var box_login = document.querySelector(".box_login");
var box_sing_up = document.querySelector(".box_sing-up");

function register(){
form_sing_up.style.display = "block";
container_login_sing_up.style.left = "410px";
form_login.style.display = "none";
box_sing_up.style.opacity = "0";
box_login.style.opacity = "1";
}