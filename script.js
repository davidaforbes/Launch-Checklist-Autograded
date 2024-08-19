// Write your JavaScript code here!
window.addEventListener("load", function() {

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
    
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        if ( pilot.value === "" || copilot.value === "" || fuelLevel.value ==="" || cargoMass.value === "") {
            alert("All fields are required.");
            event.preventDefault();
        } else if(validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
            alert("Pilot and Copilot names cannot be numbers.");
            event.preventDefault();
        } else if(validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
            alert("Fuel level and Cargo Mass must be numbers.");
            event.preventDefault();
        } else {
            formSubmission(document, document.getElementById("faultyItems"), pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
            event.preventDefault();
        };
    });
 });

    
    
    let listedPlanets;
    let listedPlanetsResponse;

    listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);
       let destArr = pickPlanet(listedPlanets)
       let missionTarget = document.getElementById("missionTarget");
       addDestinationInfo(missionTarget,destArr.name, destArr.diameter, destArr.star, destArr.distance, destArr.moons,destArr.image)

    })
 