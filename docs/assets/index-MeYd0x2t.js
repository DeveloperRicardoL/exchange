(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector("#BtnConvertir"),l=document.querySelector("#LblMostrar"),a=()=>{let r=document.getElementById("TxtIngreso").value;return parseFloat(r)},i=async()=>(await(await fetch("https://dolarapi.com/v1/dolares/blue")).json()).venta,d=async()=>(await(await fetch("https://dolarapi.com/v1/cotizaciones/eur")).json()).venta,f=async()=>{let r=a(),o=await d();return r/o},p=async()=>{const r=await i();return a()/r};u.addEventListener("click",async()=>{l.innerHTML=`Sus ${a()} pesos Argentinos💵 son iguales a ${await f()} Euros💶 o en Dolar Blue son iguales a ${await p()} Dolares💵​`,document.getElementById("TxtIngreso").value=""});