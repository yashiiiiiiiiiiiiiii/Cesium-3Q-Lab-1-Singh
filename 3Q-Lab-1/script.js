const G = 6.6743e-11;
const PI = 3.1415;

function calculateTimeToRevolve() {
    let radius = parseFloat(document.getElementById("input_radius").value);
    let mass = parseFloat(document.getElementById("input_mass").value);
 
    let time = Math.sqrt((4*(PI**2)*(radius**3))/(G*mass));

    let output = `The time for the planet to revolve is ${time}`;
    document.getElementById("result").innerText = output;
}