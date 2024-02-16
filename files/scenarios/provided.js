module.exports = {
  description: "should navigate the plateau as expected",
  providedInput: {
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
        instructions: "LMLMLMLMM",
      },
      {
        position: {
          x: 3,
          y: 3,
          orientation: "E",
        },
        instructions: "MMRMMRMRRM",
      },
    ],
  },

  expectedResults: [
    {
      position: {
        x: 1,
        y: 3,
        orientation: "N",
      },
      instructions: "",
    },
    {
      position: {
        x: 5,
        y: 1,
        orientation: "E",
      },
      instructions: "",
    },
  ],
};
