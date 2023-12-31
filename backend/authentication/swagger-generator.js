const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Registration",
    description: "Description",
  },
  host: "/localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = [
  "controllers/authController.js",
  "controllers/userController.js",
  "server.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
