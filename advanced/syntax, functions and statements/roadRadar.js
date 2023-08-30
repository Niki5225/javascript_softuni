function roadRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    function returnDifferenceLimitAndActualSpeed(limit) {
        return speed - limit;
    }

    function returnTypeOfDriving(speedDiff) {
        if (speedDiff <= 20){
            return 'speeding';
        } else if (speedDiff <= 40){
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    switch (area) {
        case 'city':
            if (speed > cityLimit) {
                let cityDiff = returnDifferenceLimitAndActualSpeed(cityLimit);
                console.log(`The speed is ${cityDiff} km/h faster than the allowed speed of ${cityLimit} - ${returnTypeOfDriving(cityDiff)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            }
            break;
        case 'residential':
            if (speed > residentialLimit) {
                let residentialDiff = returnDifferenceLimitAndActualSpeed(residentialLimit);
                console.log(`The speed is ${residentialDiff} km/h faster than the allowed speed of ${residentialLimit} - ${returnTypeOfDriving(residentialDiff)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            }
            break;
        case 'motorway':
            if (speed > motorwayLimit) {
                let motorwayDiff = returnDifferenceLimitAndActualSpeed(motorwayLimit);
                console.log(`The speed is ${motorwayDiff} km/h faster than the allowed speed of ${motorwayLimit} - ${returnTypeOfDriving(motorwayDiff)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            }
            break;
        case 'interstate':
            if (speed > interstateLimit){
                let interstateDiff = returnDifferenceLimitAndActualSpeed(interstateLimit);
                console.log(`The speed is ${interstateDiff} km/h faster than the allowed speed of ${interstateLimit} - ${returnTypeOfDriving(interstateDiff)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
            }
    }
}