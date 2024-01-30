var student={

    name : "hamza hameed",
    class : 10,
    all_rounder : true
}
   console.log(student.class);
   // we can add more elements in objects
   student.age=22;
   console.log(student.age);

   // we can also change the vlaue of element also
  student.all_rounder=false;
  console.log(student.all_rounder);
  
  // JSON javascript object notation
var obj_str = JSON.stringify(student); // we can convert object in string by JSON
console.log(obj_str); // it will show objec as string {"name":"hamza hameed","class":10,"all_rounder":false,"age":22}

var obj2 = JSON.parse(student);
console.log(obj2); // out will show you an object