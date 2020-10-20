const express = require("express");
const mongoose = require("mongoose");
const index = require("./routes/api/index");
const userInput = require("./routes/api/userinput");
const path = require("path");
const app = express();
const db = require("./config/keys").mongoURI;
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use("/api/userinput", userInput);
app.use("/api/index", index);


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
