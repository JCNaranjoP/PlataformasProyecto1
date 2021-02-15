window.addEventListener("load",widthPage);
window.addEventListener("load",clear);
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

const user_fp = document.getElementById("user_fp");
const mail_fp = document.getElementById("mail_fp");

const pass_cp = document.getElementById("pass_cp");
const cpass_cp = document.getElementById("cpass_cp");

const user = document.getElementById("user");
const pass = document.getElementById("pass");

//login
document.getElementById("form_login").addEventListener("submit",function(event){
    event.preventDefault();
    if(localStorage.getItem(user.value)!=null){
        let userr= JSON.parse(localStorage.getItem(user.value));
        if(userr[0].pass==pass.value){
            location.href = "galeria.html";
        }else{
            alert("Contraseña incorrecta");
            pass.value="";
        }
        
    }else{
        alert("Usuario no existe");
        user.value = "";
        pass.value = "";
    }
    
});


//forgot password
document.getElementById("form_f-password").addEventListener("submit",function(event){
    event.preventDefault();
    if(localStorage.getItem(user_fp.value)!=null){
        let user= JSON.parse(localStorage.getItem(user_fp.value));
        if(user[0].mail==mail_fp.value){
            change_password();
        }else{
            alert("El correo no coincide");
            mail_fp.value="";
        }
        
    }else{
        alert("Usuario no existe");
        user_fp.value = "";
        mail_fp.value = "";
    }
    
});

//change password
document.getElementById("form_c-password").addEventListener("submit",function(event){
    event.preventDefault();
    if(pass_cp.value==cpass_cp.value)
    {
        let user = Array({
            mail: mail_fp.value,
            pass: pass_cp.value,
        });
        localStorage.setItem(user_fp.value,JSON.stringify(user));
        login();
        alert("Contraseña restablecida");
    }else{
        alert("Las contraseñas no coinciden");
    }
});


//sing up
document.getElementById("form_sing-up").addEventListener("submit",function(event){
    event.preventDefault();
    if(pass_su.value==cpass_su.value)
    {
        let users = Array({
            mail: mail_su.value,
            pass: pass_su.value,
        });
        localStorage.setItem(user_su.value,JSON.stringify(users));
        alert("Registro exitoso");
        login();
    }else{
        alert("Las contraseñas no coinciden");
        cpass_su.value = "";
    }
});



//Funciones cambio de forms
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
    clear();
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
    clear();
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

//Limpiar datos
function clear() {
    user_su.value="";
        mail_su.value="";
        pass_su.value = "";
        cpass_su.value = "";
        user_fp.value="";
        mail_fp.value="";
        pass_cp.value = "";
        cpass_cp.value = "";
        user.value = "";
        pass.value = "";
}