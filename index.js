// Code your solution in this file!
// const log = console.log
// Part 1

function distanceFromHqInBlocks(pickupPoint){
    if (pickupPoint > 42){
        return pickupPoint - 42;
    }
    else{
        return Math.abs(pickupPoint - 42)
    }
}
// log(distanceFromHqInBlocks(43))
// log(distanceFromHqInBlocks(50))
// log(distanceFromHqInBlocks(34))


// Part 2
// Return distance in feet. 1 block = 264 feet

function distanceFromHqInFeet(pickupPoint){
    return distanceFromHqInBlocks(pickupPoint) * 264;
}
// log(distanceFromHqInFeet(43))
// log(distanceFromHqInFeet(50))
// log(distanceFromHqInFeet(34))


// Part 3

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination-start)*264; // 264 feet per block
    }
    else{
        return (start-destination) *264;
    }
}
// log(distanceTravelledInFeet(43, 48))
// log(distanceTravelledInFeet(50, 60))
// log(distanceTravelledInFeet(34, 28))


//part 4

function calculatesFarePrice(start, destination){
    const distanceTocharge = distanceTravelledInFeet(start, destination); // in feet
    if (distanceTocharge <= 400){
        return 0;
    }
    else if (distanceTocharge > 400 && distanceTocharge <= 2000){
        return 0.02 * (distanceTocharge - 400);
    }
    else if (distanceTocharge > 2000 && distanceTocharge <= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}
// log(calculatesFarePrice(34, 32))
// log(calculatesFarePrice(50, 58))
// log(calculatesFarePrice(34, 24))