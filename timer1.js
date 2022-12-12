const inputArr = process.argv.splice(2).sort((a, b) => {
  return a - b;
});
console.log(inputArr);
let time = 1000;

for (let input of inputArr) {
  if (inputArr === [] && isNaN(input)) {
    return null;
  }
  if (input > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * Number(input));
  }
}
