let number = Number(process.argv[2]);

if ((!number  || number <= -1) && number !== 0) {
  process.exit();
}
let row = "";
for (let index = 0; index < number; index++) {
  let num = index + 1;
  console.log(`${" ".repeat(number - num)}${num}${row}`);
  row = `${num}${row}`;
}