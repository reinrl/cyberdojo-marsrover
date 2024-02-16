module.exports = {
  testScenario: {
    gridSize: {
      xMax: 5,
      yMax: 5,
    },
    roverList: [
      {
        position: {
          x: 1,
          y: 2,
          orientation: "N",
        },
        instructions: "MRMML",
      },
      {
        position: {
          x: 3,
          y: 3,
          orientation: "E",
        },
        instructions: "RRRRL",
      },
    ],
  },

  expectedResults: [
    {
      position: {
        x: 3,
        y: 3,
        orientation: "N",
      },
      instructions: "",
    },
    {
      position: {
        x: 3,
        y: 3,
        orientation: "N",
      },
      instructions: "",
    },
  ],
};
