const performanceTest = (fn, interations = 100_000) => {
  const start = performance.now();
  new Array(interations).fill(0).forEach(() => fn());
  return ((performance.now() - start) * 1000).toFixed(3);
};

const consoleTest = (name, fn, interations = 100_000) => {
  console.time(name);
  new Array(interations).fill(0).forEach(() => fn());
  console.timeEnd(name);
};

const data = [...Array(10_000).keys()];

console.log(
  "test function 1: ",
  performanceTest(() => {
    data.find((x) => x == 100);
  }),
  "seconds"
);

console.log(
  "test function 2: ",
  performanceTest(() => {
    data.filter((x) => x == 100).at(0);
  }),
  "seconds"
);

consoleTest('function 1', () => {
    data.find((x) => x == 100);
});

consoleTest('function 2', () => {
    data.filter((x) => x == 100).at(0);
});
