// const express = require("express");
// const { createServer } = require("http");
// const { ApolloServer } = require("apollo-server-express");
// const {
//   DateTimeTypeDefinition,
//   DateTypeDefinition,
//   DateTimeResolver,
//   LocalDateTypeDefinition,
//   LocalDateResolver,
// } = require("graphql-scalars");
// const { makeExecutableSchema } = require("@graphql-tools/schema");
// const cors = require("cors");
// const typeDefs = require("../graphql/schemas");
// const resolvers = require("../graphql/resolvers");
// const context = require("../graphql/context");
// const path = require("path");

// const app = express();
// const reportRouter = require("../routes/report");
// const printFormsRouter = require("../routes/print-forms");
// const emanatRouter = require("../routes/emanat");

// const { Server } = require("socket.io");

// app.use(cors());

// typeDefs.push(
//   DateTimeTypeDefinition,
//   DateTypeDefinition,
//   LocalDateTypeDefinition
// );
// resolvers.DateTimeResolver = DateTimeResolver;
// resolvers.LocalDateResolver = LocalDateResolver;

// const apolloServer = new ApolloServer({
//   schema: makeExecutableSchema({
//     typeDefs,
//     resolvers,
//   }),
//   context,
//   introspection: true,
//   playground: {
//     settings: {
//       "schema.polling.enable": false,
//       "editor.fontSize": 18,
//     },
//   },
// });

// apolloServer.applyMiddleware({ app, path: "/api" });

// const hbs = require("hbs");
// const hbsHelpers = require("../lib/helpers");
// hbsHelpers.registerHelpers(hbs);
// app.set("views", path.join(__dirname, "../views"));
// app.set("view engine", "hbs");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../public")));

// app.use("/report", reportRouter);
// app.use("/print-forms", printFormsRouter);
// app.use("/emanat", emanatRouter);

// const server = createServer(app);

// const io = new Server(server, {
//   cors: "*",
// });
// const users = [];


// io.on("connection", (socket) => {
//   let whSocketIds = [];

//   socket.on("wh_connected", (data) => {
//     console.log("Wh user connected. Socket id: ", socket.id);

//     socket.join("wh_room");

//     whSocketIds.push(socket.id);
//   });
//   socket.on("doctor_connected", (data) => {
//     //console.log("Doctor user connected. Socket id: ", socket.id);

//     socket.join("doctor_room");

//     whSocketIds.push(socket.id);
//   });
//   socket.on("operation_connected", (data) => {
//     //console.log("Doctor user connected. Socket id: ", socket.id);
//     socket.join("operation_room");

//     whSocketIds.push(socket.id);
//   });
//   socket.on("message", (data) => {
//     //console.log("socket message", data);
//   });
//   socket.on("registrator_connected", (data) => {
//     //console.log("Doctor user connected. Socket id: ", socket.id);

//     socket.join("registrator_room");

//     whSocketIds.push(socket.id);
//   });
//   socket.on("message", (data) => {
//     //console.log("socket message", data);
//   });

//   const disconnectHandle = (data) => {
//     if (whSocketIds.includes(socket.id)) {
//       whSocketIds = whSocketIds.filter((socketId) => socketId !== socket.id);
//     }
//   };

//   socket.on("disconnect", disconnectHandle);
//   socket.on("_disconnect_", disconnectHandle);

//   socket.on("newRequirement", (data) => {
//     socket.broadcast.to("wh_room").emit("newRequirement", data);
//   });
//   socket.on("UpdateQueuSystem", (data) => {
//     socket.broadcast.to("doctor_room").emit("UpdateQueuSystem", data);
//   });
//   socket.on("UpdateOpSystem", (data) => {
//     socket.broadcast.to("operation_room").emit("UpdateOpSystem", data);
//   });
//   socket.on("newReferral", (data) => {
//     socket.broadcast.to("registrator_room").emit("newReferral", data);
//   });
// });

// io.listen(5001);

// module.exports = server;
