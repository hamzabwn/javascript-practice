

// Html file name is connect_js_to_html.html
// we will get the value of html attributes by id 
console.log("hellow");

var link = document.getElementById("123");
console.log(link.textContent); // output show click me!
console.log(link.innerHTML); // will show inner content with tags



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