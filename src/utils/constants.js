export const LOADING_STRUCTURES = {
  SIMPLE_STRUCTURE: [
    { type: "text", height: "400px", width: "650px" },
    { type: "text", width: "500px", height: "20px" },
    { type: "text", width: "250px", height: "20px" },
  ],
  NESTED_STRUCTURE: [
    {
      type: "image",
      width: "100px",
      height: "100px",
      style: { marginBottom: "20px" },
    },
    { type: "text", width: "200px", height: "20px" },
    {
      type: "text",
      width: "200px",
      height: "20px",
      style: { margin: "10px 0" },
    },
    {
      type: "multipleTiles",
      children: [
        { type: "text", width: "100px", height: "20px" },
        { type: "text", width: "100px", height: "20px" },
      ],
    },
  ],
};
