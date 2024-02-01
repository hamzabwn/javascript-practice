
console.log("hellow");


var names = document.getElementById("name");
var email= document.getElementById("email");
var pwd = document.getElementById("password");

var submit = document.getElementById("submit");
submit.onclick = function()
{
if(names.value!=null&&email.value!=null)
{
    document.write("success");
}
};