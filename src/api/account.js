function createMultiple(due_day, n, value) {
  let mes = new Date().getMonth();
  console.log("R$ " + value.toString() + " em " + n.toString() + " parcelas");
  let part = value / n;
  for (let i = 0; i < n; i++) {
    let novaData = new Date(2022, mes + i, due_day).toDateString();
    let val = Number.parseFloat(part).toFixed(2).replace(".", ",");
    let index = i + 1 < 10 ? `0${i + 1}` : i + 1;
    console.log(`${index}: R$ ${val} : ${novaData}`);
  }
}

createMultiple(15, 13, 123.8);

console.log(0 ? "true" : "false");
console.log(1 ? "true" : "false");
