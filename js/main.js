
document.getElementById("btn_sing-up").addEventListener("click", register);
document.getElementById("btn_login").addEventListener("click", login);
window.addEventListener("resize",widthPage);
document.getElementById("forgot-password").addEventListener("click",forgot_password);
document.getElementById("btn_f-password").addEventListener("click", change_password);
document.getElementById("btn_c-password").addEventListener("click",change);

/*Var declaration*/
var form_login = document.querySelector(".form_login");
var form_sing_up = document.querySelector(".form_sing-up");
var form_f_password = document.querySelector(".form_f-password");
var form_c_password = document.querySelector(".form_c-password");
var container_login_sing_up = document.querySelector(".container_login-sing-up")
var box_login = document.querySelector(".box_login");
var box_sing_up = document.querySelector(".box_sing-up");


function change(){
    alert("Contraseña restablecida");
    login();
}


function change_password(){
    if(window.innerWidth > 850){
        form_f_password.style.display = "none";
        form_c_password.style.display = "block";
    }else{
    form_sing_up.style.display = "none";
    container_login_sing_up.style.left = "0px";
    form_login.style.display = "none";
    box_sing_up.style.display = "block";
    box_login.style.display = "none";
    form_f_password.style.display = "none";
    form_c_password.style.display = "block";
    }
}


function forgot_password(){
    if(window.innerWidth > 850){
        form_sing_up.style.display = "none";
        container_login_sing_up.style.left = "10px";
        form_login.style.display = "none";
        box_sing_up.style.opacity = "1";
        box_login.style.opacity = "0";
        form_f_password.style.display = "block";
        form_c_password.style.display = "none";
    }else{
    form_sing_up.style.display = "none";
    container_login_sing_up.style.left = "0px";
    form_login.style.display = "none";
    box_sing_up.style.display = "block";
    box_login.style.display = "none";
    form_f_password.style.display = "block";
    form_c_password.style.display = "none";
    }
}

function register(){
    if(window.innerWidth > 850){

        form_sing_up.style.display = "block";
        container_login_sing_up.style.left = "410px";
        form_login.style.display = "none";
        form_f_password.style.display = "none";
        form_c_password.style.display = "none";
        box_sing_up.style.opacity = "0";
        box_login.style.opacity = "1";
    }else{
        form_f_password.style.display = "none";
        form_c_password.style.display = "none";
        form_sing_up.style.display = "block";
        container_login_sing_up.style.left = "0px";
        form_login.style.display = "none";
        box_sing_up.style.display = "none";
        box_login.style.display = "block";
        box_login.style.opacity = "1";
    }
}

function widthPage(){

    if(window.innerWidth>850){
        box_login.style.display = "block";
        box_sing_up.style.display = "block";
    }else{
        box_sing_up.style.display = "block";
        box_sing_up.style.opacity = "1";
        box_login.style.display = "none";
        form_login.style.display = "block";
        form_sing_up.style.display = "none";
        form_f_password.style.display = "none";
        form_c_password.style.display = "none";
        container_login_sing_up.style.left = "0px";
    }
}


function login(){
    if(window.innerWidth > 850){
        form_sing_up.style.display = "none";
        container_login_sing_up.style.left = "10px";
        form_login.style.display = "block";
        box_sing_up.style.opacity = "1";
        box_login.style.opacity = "0";
        form_f_password.style.display = "none";
        form_c_password.style.display = "none";
    }else{
    form_sing_up.style.display = "none";
    container_login_sing_up.style.left = "0px";
    form_login.style.display = "block";
    box_sing_up.style.display = "block";
    box_login.style.display = "none";
    form_f_password.style.display = "none";
    form_c_password.style.display = "none";
    }
}
