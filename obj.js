//  the creating the object
// the suppose the object

const user = {
  name: "mourya jyoti",
  age: 25,
}
delete user.name
 console.log(user.age);
 console.log(user);
 
//  this the way to acdes the the object in tha javaScript
 

// dynamic object in the javaScript
 const lastname="moourya"
 const firstname="jyoti"
 const user1={
    // firstname:"jyoti",
    [lastname]:firstname
 }
 console.log(user1);
 
//   for the access the dyamic values the  add [] the key this brackets