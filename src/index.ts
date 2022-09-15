import "./styles.css";

let nota: number = 0;
let promedio: number = 0;
//let total: number = 0;

for (let i = 0; i < 10; i++) {
  nota = Number(prompt("Ingrese nota"));
  total = total + nota;
}
promedio = total / 10;
console.log("el Promedio de estas 10 Notas es:  " + promedio);
