function validateForm()
{
alert("CONGRATS !!!!")
}

//const btn = document.getElementById('btn');
//btn.addEventListener('click', function onClick(event) {
// document.body.style.backgroundColor = 'salmon'
      function validateForm()
alert("sucessful")

function ValidateEmail(){
var email =document.getElementById("txtEmail").value;
var lblError =document.getElementById("lblError").value;
iblError.innerHTML="";
var expr =/^([\w\.]+)-@((\[[0-9]{1,3}\.[0-9]{1,3}\.|(([w-\.]+))([a-ZA-Z]{2,4}|[0-9]{1,3}(\]?)$/;
if(!expr.test(email)){
lblError.innerHTML ="invalid Email address.";
}
}  
}                                                                                                                             
