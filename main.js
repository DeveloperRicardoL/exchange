import "./style.css";
import { Chart } from "chart.js/auto";

const boton = document.querySelector("#BtnConvertir");
const resp = document.querySelector("#LblMostrar");

const ctx = document.getElementById("myChart");

const montoIngresado = () => {
  let monto = document.getElementById("TxtIngreso").value;
  return parseFloat(monto);
};

const preciosDivisas = async () => {
  const url = "https://dolarapi.com/v1/dolares";
  const requestData = await fetch(url);
  const data = await requestData.json();
  let nom = [];
  let prec = [];
  data.map((d) => {
    nom.push(d.nombre);
    prec.push(d.venta);
  });
  return {
    nom: nom,
    prec: prec,
  };
};

const calcularEuros = async () => {
  const url = "https://dolarapi.com/v1/cotizaciones/eur";
  const requestData = await fetch(url);
  const data = await requestData.json();
  return montoIngresado() / data.venta;
};

const calcularDolarBlue = async () => {
  const url = "https://dolarapi.com/v1/dolares/blue";
  const requestData = await fetch(url);
  const data = await requestData.json();
  return montoIngresado() / data.venta;
};

const iniciarChart = async () => {
  const datos = await preciosDivisas();

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: datos.nom,
      datasets: [
        {
          label: "Cotizaciones del Día",
          data: datos.prec,
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
};

iniciarChart();

boton.addEventListener("click", async () => {
  resp.innerHTML = `Sus ${montoIngresado()} pesos Argentinos💵 son iguales a ${await calcularEuros()} Euros💶 o en Dolar Blue son iguales a ${await calcularDolarBlue()} Dolares💵​`;
  document.getElementById("TxtIngreso").value = "";
});
