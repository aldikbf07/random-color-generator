// //This is my first javascript code
// console.log("Hello World");

// let name = "Aldi dwi iftiansyah";


// let firstName = "Aldi";
// let lastName = "Dwi Iftiansyah";
// let age = 20;
// let isApproved = true;
// let selectedColor = null;

// let person = {
// name: "Aldi",
// age: 20
// };

// person.name = "Dwi";

// console.log(person);


// function greet(name){
// console.log("Hello " + name);
// }

// greet('annisa nur febriani falentin');


// function tambah (angka1, angka2){
//    return angka1 + angka2;
// }

// console.log('jadi hasil pertambahan dari 200 + 900 adalah = ',tambah(200,900));

// let angka1 = 8310928210971324867123;

// function angka (angka){
//    if(angka % 2 === 0){
//      alert('angka '+ angka1 +' adalah = genap');
//    }
//    else alert('angka ' + angka1 +' adalah = ganjil');
// }




const colors = ["green", "red" , "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber(); 
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];
})

function getRandomNumber(){
   return Math.floor(Math.random()*colors.length);
}


