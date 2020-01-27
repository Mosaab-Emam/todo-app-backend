const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = graphql;
const Todo = require("../models/todo");

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    done: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return Todo.find({});
      }
    },
    getTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Todo.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        const todo = new Todo({ name: args.name, done: false });
        return todo.save();
      }
    },
    updateTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        done: { type: GraphQLBoolean }
      },
      resolve(parent, args) {
        return Todo.findByIdAndUpdate(
          args.id,
          { name: args.name, done: args.done },
          { new: true }
        );
      }
    },
    deleteTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Todo.findByIdAndDelete(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
