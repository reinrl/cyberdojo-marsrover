module.exports = {
  description: "should fall off the plateau as expected on the high end",
  providedInput: {
    gridSize: {
      xMax: 5,
      yMax: 5,
    },
    roverList: [
      {
        position: {
          x: 5,
          y: 5,
          orientation: "N",
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
