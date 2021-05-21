// Libraries
const express = require("express");
const app = express();
const cors = require("cors");

// End points
const start = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.use("/api/start", start);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}