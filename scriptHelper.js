// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget")
    div.innerHTML =
    `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `;
    return
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let statusHeader = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

   list.style.visibility = "visible";
    
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        statusHeader.innerHTML = "Shuttle Not Ready for Launch";
        statusHeader.style.color = "red";
    } ;
    if (cargoMass > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        statusHeader.innerHTML = "Shuttle Not Ready for Launch";
        statusHeader.style.color = "red";
    }
    if (fuelLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    if (cargoMass <= 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    if (fuelStatus.innerHTML === "Fuel level high enough for launch" && cargoStatus.innerHTML === "Cargo mass low enough for launch") {
    statusHeader.style.color = "green";
    statusHeader.innerHTML = "Shuttle is Ready for Launch";
    }
    return
 };


async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json()
         });
 
     return planetsReturned;
 }
 
function pickPlanet(planets) {
    let planetNumber;
    planetNumber = Math.floor(Math.random() * (planets.length))
    return planets[planetNumber]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;