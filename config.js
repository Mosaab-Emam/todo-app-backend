const { remoteDBPassword } = require("./private");
module.exports = {
  PORT: process.env.PORT || 3000,
  mongodb: {
    url: `mongodb+srv://nuxt-express-todo-app:${
      process.env.remoteDBPassword
    }@nuxtexpresstodoapp-fz4xb.mongodb.net/todo-app?retryWrites=true&w=majority`,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  }
};
