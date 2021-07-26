//                      Question no 1
/*
function forEachItem(abc) {
    for(let i = 0 ; i < abc.length ; i++)
    {
        let price = abc[i].price * abc[i].quantity ;
        console.log(`Total Price of ${abc[i].name} is ${price} Rs.`);
    }
    return ;
}
function forAllItem(abc) {
    var totalPrice = 0 ;
    for(let i = 0 ; i < abc.length ; i++)
    {
        let price = abc[i].price * abc[i].quantity ;
        totalPrice +=  price ; 
    }
    console.log("Total price of all items is: " + totalPrice);
    return ;
}
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}
] ;
forEachItem(itemsArray);
forAllItem(itemsArray);
*/

//                      Question no 2
/*
var CNIC = {
    firstName: "huzaifa",
    lastName: "rehan",
    email: "huzaifarehan001@gmail.com",
    password: "12345678",
    age: 18,
    gender: "male",
    city: "Karachi",
    country: "Pakistan",
  };
  
  let fName = CNIC.hasOwnProperty("firstName");
  console.log("This object carrying the property of firstname is " + fName);
  let lName = CNIC.hasOwnProperty("lastName");
  console.log("This object carrying the property of lastname is " + lName);
  let age = CNIC.hasOwnProperty("age");
  console.log("This object carrying the property of age is " + age);
  let country = CNIC.hasOwnProperty("country");
  console.log("This object carrying the property of country is " + country);
  */

//                    Question no 3
/*
  function StudentInfo(firstname, lastname, age, id, school) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.id = id;
    this.school = school;
  }
  
  var Student1 = new StudentInfo("huzaifa", "Rehan" , 21 , 22071 , "Saylani");
  var Student2 = new StudentInfo("aliyan", "Ansari", 23, 19675, "NED");
  console.log(Student1, Student2);
  */

//                    Question no 4

//   function Population(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
//   }
//   function onClick() {
//     var names = document.getElementById("uname").value;
//     if(document.getElementById("male").checked)
//     {
//     var gender = "male";
//     }
//     else if(document.getElementById("female").checked)
//     {
//         var gender = "female";
//     }
//     else{
//         alert("Please Select a Gender");
//     }
//     var address = document.getElementById("add").value
//     var education = document.getElementById("edu").value
//     var profession = document.getElementById("pro").value

//     var citizen = new Population(names,gender,address,education,profession)
//     document.getElementById("Data").innerHTML += (`Citizen name is ${citizen.name} and <br> gender is ${citizen.gender} <br> Address of ${citizen.name} is ${citizen.address} <br> Education is ${citizen.education} <br> By Profession ${citizen.names} is a ${citizen.profession}  `);
//     //document.write(`Citizen name is ${citizen.name} and <br> gender is ${citizen.gender} <br> Address of ${citizen.name} is ${citizen.address} <br> Education is ${citizen.education} <br> By Profession ${citizen.names} is a ${citizen.profession}  `)
//   }
