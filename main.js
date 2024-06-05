import "./style.css";
import { Chart } from "chart.js/auto";

const boton = document.querySelector("#BtnConvertir");
const resp = document.querySelector("#LblMostrar");

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const montoIngresado = () => {
  let monto = document.getElementById("TxtIngreso").value;
  return parseFloat(monto);
};

const obtenerDolarBlue = async () => {
  const url = "https://dolarapi.com/v1/dolares/blue";
  const requestData = await fetch(url);
  const data = await requestData.json();
  return data.venta;
};

const obtenerEuroBlue = async () => {
  const url = "https://dolarapi.com/v1/cotizaciones/eur";
  const requestData = await fetch(url);
  const data = await requestData.json();
  return data.venta;
};

const convertirPesos = async () => {
  let pesos = montoIngresado();
  let precEuro = await obtenerEuroBlue();
  return pesos / precEuro;
};

const calcularDolarBlue = async () => {
  const dolarBlue = await obtenerDolarBlue();

  return montoIngresado() / dolarBlue;
};
boton.addEventListener("click", async () => {
  resp.innerHTML = `Sus ${montoIngresado()} pesos Argentinos💵 son iguales a ${await convertirPesos()} Euros💶 o en Dolar Blue son iguales a ${await calcularDolarBlue()} Dolares💵​`;
  document.getElementById("TxtIngreso").value = "";
});
