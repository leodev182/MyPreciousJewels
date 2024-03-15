const cors = require("cors");
const express = require("express");
const app = express();
const joyasRoutes = require("./routes/joyasRoutes.js");

app.use(express.json());
app.use(cors());
app.use("/joyas", joyasRoutes);

app.listen(3000, () => {
  console.log("Server On!");
});
