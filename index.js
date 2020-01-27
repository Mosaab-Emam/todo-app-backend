require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const config = require("./config");

// Initiate app
const app = express();

// Use cors middleware
app.use(cors());

// Use graphql middleware
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: graphqlSchema
  })
);

// Connect to database
mongoose.connect(config.mongodb.url, config.mongodb.options);
mongoose.connection.once("open", () => {
  console.log("Successfully connected to database");
});

// Listen to server
app.listen(config.PORT, () => {
  console.log(`App is running on port ${config.PORT}`);
});
