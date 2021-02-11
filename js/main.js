
document.getElementById("btn_sing-up").addEventListener("click", register);
document.getElementById("btn_login").addEventListener("click", login);
window.addEventListener("resize",widthPage);
document.getElementById("forgot-password").addEventListener("click",forgot_password);

/*Var declaration*/
var form_login = document.querySelector(".form_login");
var form_sing_up = document.querySelector(".form_sing-up");
var form_f_password = document.querySelector(".form_f-password");
var form_c_password = document.querySelector(".form_c-password");
var container_login_sing_up = document.querySelector(".container_login-sing-up")
var box_login = document.querySelector(".box_login");
var box_sing_up = document.querySelector(".box_sing-up");
const mail_su = document.getElementById("mail_su");
const user_su = document.getElementById("user_su");
const pass_su = document.getElementById("pass_su");
const cpass_su = document.getElementById("cpass_su");


document.getElementById("form_f-password").addEventListener("submit",function(event){
    event.preventDefault();
    change_password();
});

document.getElementById("form_c-password").addEventListener("submit",function(event){
    event.preventDefault();
    change();
});
//sing up
document.getElementById("form_sing-up").addEventListener("submit",function(event){
    event.preventDefault();
    let user = array({
        mail = mail_su.value,
        user: user_su.value,
        pass = pass_su.value,
        cpass = cpass_su.value
    });
    localStorage.setItem("user",JSON.stringify(user));
    login();
});

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
