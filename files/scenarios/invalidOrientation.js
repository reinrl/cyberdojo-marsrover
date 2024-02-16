module.exports = {
  description:
    "should refuse action if the orientation is not one of the understood four compass headings",
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
