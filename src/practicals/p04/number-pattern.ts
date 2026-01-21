const p =Number(process.argv[2]);
if (!isNaN(p) && p >0) {
for (let i = 1 ;i <=p; i++) {
console.log(i)
    let row ="";

for (let j = p; j >= 1; j--) {
    row += j
;
    }
console.log(row);
  }
}   