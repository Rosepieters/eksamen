var billeder = ["billeder/krea1.webp", "billeder/spil.webp", "billeder/krea3.webp"];
var nuværendeBillede = 0;

function skiftBillede() {
  nuværendeBillede = (nuværendeBillede + 1) % billeder.length;
  document.getElementById("billedTag").src = billeder[nuværendeBillede];
}

setInterval(skiftBillede, 3000); // Skift billede hvert 3. sekund (3000 ms)