module.exports = {
  PORT: process.env.PORT || 3000,
  mongodb: {
    url: "mongodb://localhost:27017/todos",
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  }
};
