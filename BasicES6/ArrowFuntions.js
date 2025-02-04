//Normal Function
const square = function (number) {
  return number * number;
};

//Arror Function

const square1 = (number) => {
  return number * number;
};

const square2 = (number) => number * number;

// console.log(square1(5));
// console.log(square2(5));

//

const jobs = [
  { id: 1, isActive: true },
  { id: 1, isActive: true },
  { id: 1, isActive: false },
];

console.log(
  jobs.filter(function (jobs) {
    return jobs.isActive;
  })
);

console.log(jobs.filter((jobs) => jobs.isActive));
