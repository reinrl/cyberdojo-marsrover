module.exports = {
  description: "should not fall off of flat earth",
  providedInput: {
    gridSize: {
      xMax: 2,
      yMax: 2,
    },
    roverList: [
      {
        position: {
          x: 0,
          y: 0,
          orientation: "N",
        },
        instructions: "MMMRRM",
      },
    ],
  },
  expectedResults: [
    {
      position: {
        x: 0,
        y: 2,
        orientation: "W",
      },
      instructions: "",
    },
  ],
};
