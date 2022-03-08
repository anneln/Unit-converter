let inputValue = document.getElementById("input-value").value;

function updateValue(inputValue) {
  console.log(inputValue);
  length();
  volume();
  mass();
}

 function length() {
  let resultLength = document.getElementById("result-length");
  let toFeet = (document.getElementById("input-value").value * 3.28084).toFixed(3);
  let toMeter = (document.getElementById("input-value").value/ 3.28084).toFixed(3);
  resultLength.innerText = `${document.getElementById("input-value").value} meters = ${toFeet} feets | ${document.getElementById("input-value").value} feets = ${toMeter} meters`;
}
 
function volume() {
  let resultVolume = document.getElementById("result-volume");
  let toLiter = (document.getElementById("input-value").value * 0.264172).toFixed(3);
  let toGallons = (document.getElementById("input-value").value / 0.264172).toFixed(3);
  resultVolume.innerText = `${document.getElementById("input-value").value} liters = ${toLiter} US gallons | ${document.getElementById("input-value").value} US gallons = ${toGallons} liters`;
}

function mass() {
  let resultMass = document.getElementById('result-mass');
  let toKilos = (document.getElementById("input-value").value * 2.20462).toFixed(3);
  let toPounds = (document.getElementById("input-value").value / 2.20462).toFixed(3);
  resultMass.innerText = `${document.getElementById("input-value").value} kilos = ${toKilos} pounds | ${document.getElementById("input-value").value} pounds = ${toPounds} kilos`;
}

