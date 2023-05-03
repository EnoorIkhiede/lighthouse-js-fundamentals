var n = 100
while (n <= 200) {
  if (n % 3 === 0 && n % 4 === 0) {
      console.log("LoopyLighthouse");
  }
  else if (n % 3 === 0) {
      console.log("Loopy");
  }
  else if (n % 4 === 0) {
      console.log("Lighthouse");
  }
  else{
      console.log(n);
  }
  
  //Never forget to decrement/increment the iteration variable in a while loop
  // Otherwise, you loop will run infinite iterations
  n = n+1;
}

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}