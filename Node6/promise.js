const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(1);
    reject(new Error("message"));
  }, 2000);
  2;
});

p.then((result) => console.log("resolve : ", result)).catch((err) =>
  console.log("error", err.message)
);
console.log();
