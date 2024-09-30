function getValues() {
    document.getElementById("generateRandomNumber");
    floor = numFloor.value
    ceiling = numCeiling.value
    console.log("Floor: ", floor)
    console.log("Ceiling: ", ceiling)

    number = getRandomInt(floor, ceiling)
    console.log("Random Number: ", number)
    document.getElementById("displayNumber").textContent = number;
}

function getRandomInt(floor, ceiling) {
    min = Math.ceil(floor)
    max = Math.floor(ceiling)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}