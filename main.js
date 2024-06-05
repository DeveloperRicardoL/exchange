import "./style.css";

const boton = document.querySelector("#BtnConvertir");
const resp = document.querySelector("#LblMostrar");

const montoIngresado = () => {
  let monto = document.getElementById("TxtIngreso").value;
  return monto;
};

boton.addEventListener("click", () => {
  resp.innerHTML = `Sus ${montoIngresado()} pesos Argentinos son iguales a ${
    montoIngresado() * 2
  } Euros`;
  document.getElementById("TxtIngreso").value = "";
});
