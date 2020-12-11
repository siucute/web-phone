/* FORM LOGIN */
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", ()=>{
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", ()=>{
	container.classList.add("sign-up-mode");
});

var userAdmin='admin';
var passAdmin='admin';

var inputUseradmin=document.getElementById('t1');
var inputPassadmin=document.getElementById('t2');

var inputdangkyuser=document.getElementById('t3');
var inputdangkypass=document.getElementById('t5');

function checkform2(){
	var u=document.getElementById("t3").value;
    var p1=document.getElementById("t4").value;
    var p2=document.getElementById("t5").value;

    if(u=== ""){
        alert("Vui lòng nhập Username!");
        return false;
	}
    else if(p1=== ""){
        alert("Vui lòng nhập email!");
        return false;
    }
	else if(p2=== ""){
		alert("Vui lòng nhập mật khẩu!");
		return false;
	}  
	alert("Đăng ký thành công !");	
    return true;  	
}

function checklogin(){
	var user=inputUseradmin.value;
	var pass=inputPassadmin.value;

	if(user===""){
		alert("Chưa điền user !");
	}else if(pass===""){
		alert("Chưa điền password !");
	}
	else if(user==userAdmin && pass==passAdmin){
		alert("Đăng nhập Admin thành công !");
		//chuyển hướng sang trang admin
	}
}

