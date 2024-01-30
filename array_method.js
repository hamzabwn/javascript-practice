var roll_no = [10,20,30,40,50];
var names =["Ali","Hamza","Haider","Abu Bakar","Adnan"];
var subjects =new Array("eng","urdu","math");

// There are some method of array which we use in javascript some method are uses in given below

//Remove Methods
roll_no.pop(); // That method is use for remove last element in aray
console.log(roll_no); // output will show [10,20,30,40]

roll_no.splice(0,1); // That method is use for remove for element for index and after value
console.log(roll_no); // output wil show [20,30,40]

// Add method
names.push("Ahmad");
console.log(names); // output will show like this ['Ali', 'Hamza', 'Haider', 'Abu Bakar', 'Adnan', 'Ahmad]

// set Alphabatically

names.sort(); // This method set the element in array alphabatically
console.log(names); // output will show like this ['Abu Bakar', 'Adnan', 'Ahmad', 'Ali', 'Haider', 'Hamza']

//Reverse array

names.reverse(); // for reverse the elements of the array we use this method
console.log(names); //The outpu will show like this ['Hamza', 'Haider', 'Ali', 'Ahmad', 'Adnan', 'Abu Bakar']