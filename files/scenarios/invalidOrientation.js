module.exports = {
  testScenario: {
    gridSize: {
      xMax: 5,
      yMax: 5,
    },
    roverList: [
      {
        position: {
          x: 0,
          y: 0,
          orientation: "U",
        },
        instructions: "M",
      },
    ],
  },

  expectedResults: [
    {
      position: "indeterminate - invalid orientation",
      instructions: "",
    },
  ],
};
