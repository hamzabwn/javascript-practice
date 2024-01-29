var a = 10;
var b =20;
console.log("a + b =",a+b);
console.log("a-b =",a-b);
console.log("a/b =",a/b);
console.log("a*b =",a*b);
console.log("a%b=",a%b);

// copy the value of array
var a = [1,2,3,4];
var b = [...a];  // ... is spread operator which is used for copy the values
b.pop(); // pop is used for remove the last element in array

// we also can copy the value of objects

var obj ={

    name :"hamza",
    class : 10,
    student : true
};


var obj1={...obj};

// we can also delete the value in obj by use delete kayword
delete obj.name;


// condition checks
// 0 false NAN null
if(0)
{
    console.log("helo");

}

else
{
    console.log("hi");
}

// forEach loop in javascript
// Array per use karna ka lia ham forEach loop ka use karta ha
var a = [10 ,20,30,40,50]  // forEach loop only change the temporary value of array not change the real value of array
a.forEach(function(val) {
console.log(val+10);    
});

//  ham forin loops javascript ma objects ka lia use karta ha

for (const key in obj) {



    console.log(key,obj[key]);
    
}



// call back function
// wo function jis ko ham bad ma chalana chata ha uska lia ham callback function ue karta ha
setTimeout(function()
{
    console.log("3 second after it run");
},3000);



// Ab ham start kara ga first class function 

function abc(a){
a();
};

abc(function(){console.log("hello i am first class function")});