const number = Number(process.argv[2]);
if ((isNaN(number)  || number <= -1) && number !== 0) {
  process.exit();
}
let row = "";
for (let i = 0; i < number; i++) {
  let num = i + 1;
  console.log(`${" ".repeat(number - num)}${num}${row}`);
  row = `${num}${row}`;
}