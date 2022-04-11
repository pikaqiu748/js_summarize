const test = new Promise(r => {
  setTimeout(() => {
    r(1);
  }, 1000);
}).then(() => console.log(test)); // pending

setTimeout(() => {
  console.log(test); // fullfilled
}, 2000);

