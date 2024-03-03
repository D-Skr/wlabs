const tripTime = (arr) => {
  let result = {
    avgSpeedLimits: [],
    segmentTimes: [],
    totalTime: null,
  };

  for (let segment of arr) {
    let segmentTime = 0;
    for (let road of segment.speedLimits) {
      const time = road.distance / road.speedLimit;
      // console.log(`${road.distance} = ${road.speedLimit} * ${time}`);
      segmentTime += time;
    }

    // result.totalTime += segmentTime;
    result.segmentTimes.push(segmentTime);
  }

  // 10 miles @ 50 mph + 20 miles @ 35 mph
  // 10 + 20 = 30
  // 50 (10 / 30) + 35 (20 / 30) = 40
  // total distance traveled
  // each speedLimit * (distance for road / totalDistance) + ...
  for (let segment of arr) {
    let totalDistance = 0;
    for (let road of segment.speedLimits) {
      totalDistance += road.distance;
    }

    let runningAverage = 0;
    for (let road of segment.speedLimits) {
      let intermediate = road.speedLimit * (road.distance / totalDistance);
      runningAverage += intermediate;
    }

    result.avgSpeedLimits.push(runningAverage);
  }

  result.totalTime = result.segmentTimes.reduce((aggregation, current) => {
    return aggregation + current;
  }, 0);
  console.log(result);
  return Math.round(result.totalTime); //10
};

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE

const stops = [
  {
    name: `Gus's Gas`,
    speedLimits: [
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 97,
        speedLimit: 65,
      },
      {
        distance: 72,
        speedLimit: 70,
      },
      {
        distance: 25,
        speedLimit: 50,
      },
    ],
    traffic: 12,
  },
  {
    name: `Halle's House of Pancakes`,
    speedLimits: [
      {
        distance: 36,
        speedLimit: 50,
      },
      {
        distance: 141,
        speedLimit: 75,
      },
    ],
    traffic: 0,
  },
  {
    name: `Jake's Great Shakes`,
    speedLimits: [
      {
        distance: 100,
        speedLimit: 75,
      },
      {
        distance: 84,
        speedLimit: 70,
      },
      {
        distance: 20,
        speedLimit: 75,
      },
    ],
    traffic: 30,
  },
  {
    name: `Luna's Lunch Counter`,
    speedLimits: [
      {
        distance: 3,
        speedLimit: 35,
      },
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 20,
        speedLimit: 65,
      },
      {
        distance: 85,
        speedLimit: 75,
      },
      {
        distance: 3,
        speedLimit: 65,
      },
      {
        distance: 5,
        speedLimit: 55,
      },
    ],
    traffic: 7,
  },
];

console.log(tripTime(stops));
