let gravConst = 0.000000000066743;

function calculateTimeToRevolve() {
    let radius = parseFloat(document.getElementById("input_radius").value);
    let mass = parseFloat(document.getElementById("input_mass").value);
 
    let time = Math.sqrt((4*(Math.PI**2)*(radius**3))/(gravConst*mass));

    let output = `The time for the planet to revolve is ${time}`;
    document.getElementById("time_result").innerText = output;
}