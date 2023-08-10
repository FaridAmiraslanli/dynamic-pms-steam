const express = require("express");

const socketIO = require("socket.io-client");

const host = "http://192.168.50.129:5000";
const socket = socketIO(host);

socket.on("connect", () => {
  console.log(`Connected to Socket`);
});

module.exports = socket;
