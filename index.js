require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const graphqlSchema = require("./graphql/schema");

const PORT = process.env.PORT || 3000;

// Initiate app
const app = express();

// Use cors middleware
app.use(cors());

// Use graphql middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
  })
);

// Connect to database
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("Successfully connected to database");
});

// Listen to server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
