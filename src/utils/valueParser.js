export default function parseValue(val) {
  val = val.toString();
  // val = "123,45"
  val = val.replace(",", "");
  // "12345"
  val = Number.parseFloat(val / 100).toFixed(2);
  // "123.45"
  return `R$ ${val.toString().replace(".", ",")}`;
}
