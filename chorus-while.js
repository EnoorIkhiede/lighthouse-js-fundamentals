const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

//Tinkering the above
let verse = "Let's jump!"

for (let again = 0; again < 10; again++) {
  console.log(verse);
} 
console.log("until the sun comes down, we jump!");


let verse2 = "Let's jump!"

for (let again2 = 0; again2 < 10; again2++) {
  if (again2 === 5) {
    console.log("*change key*")
  }
  console.log(verse2);
} 
console.log("until the sun comes down, we jump!");