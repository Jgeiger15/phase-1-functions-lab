// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    return Math.abs([someValue - 42] * 264) 
}

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs([start - destination] * 264)
    return distance

}

function calculatesFarePrice(start, destination) {
    Math.abs([start - destination] * 264)
    let distance = Math.abs([start - destination] * 264)

    if (distance <= 400) {  
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return 2.56;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
    
}