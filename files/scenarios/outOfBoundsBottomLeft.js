module.exports = {
  description: "should fall off the plateau as expected on the low end",
  providedInput: {
    gridSize: {
      xMax: 5,
      yMax: 5,
    },
    roverList: [
      {
        position: {
          x: 0,
          y: 0,
          orientation: "S",
        },
        instructions: "M",
      },
    ],
  },

  expectedResults: [
    {
      position: "indeterminate - out of bounds",
      instructions: "",
    },
  ],
};
