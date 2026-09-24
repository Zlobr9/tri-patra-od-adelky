const CONTACT_EMAIL="DOPLNIT_EMAIL@SEM.CZ";
document.getElementById("orderForm").addEventListener("submit",function(e){e.preventDefault();const d=new FormData(this);if(CONTACT_EMAIL.includes("DOPLNIT")){const r=document.getElementById("formResult");r.hidden=false;r.innerHTML="Web je připravený. Stačí ještě doplnit skutečný e-mail Adélky do souboru <b>script.js</b>.";return}const subject=encodeURIComponent("Poptávka dortu – Tři Patra od Adélky");const body=encodeURIComponent(`Jméno: ${d.get("name")}
Kontakt: ${d.get("contact")}
Datum: ${d.get("date")}
Počet porcí: ${d.get("servings")||"neuvedeno"}
Typ: ${d.get("type")}
Příchuť: ${d.get("flavor")||"neuvedeno"}

Představa:
${d.get("message")}`);location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`});