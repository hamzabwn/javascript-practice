// selecter get element by id

function fun(){
   var a= document.getElementById("mid");
   a.innerHTML="Do code for practice";
   alert(document.getElementById("mid").innerText);
  // console.info("is this information");
   a.style.background="green";
 //  console.error("an error occur");

}
var d = function(){
var a = document.getElementById("d");
a.innerHTML= "go to write code";
alert(a);

// get element by tagname

}


function vc(){
  a= document.getElementsByTagName("h1");
  a.innerHTML="Hi you have changed by it";
  console.log(a.innerText); // dobara is innerhtml ka text show karna ka lia hamza phir sa isa select kar para ga
 alert(a.innerText);
};

function sum( plus){
  var a = 10;
  var b = 20;
  var plus = a+b;
  console.log(plus);
  
  return plus;
} ;

console.log(sum());