require("dotenv").config();
const express = require("express");
const http = require("http");
const axios = require("axios");
const cors = require("cors");
const app = express();

const socket = require("./utils/socket");
const User = require("./model/userModel");
const GameInfo = require("./model/gameModel");
const DBGame = require("./model/dbgameModel");
const connectDB = require("./utils/db");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [],
//   temperature: 0,
//   max_tokens: 256,
// });

app.use(
  cors({
    origin: "*",
  })
);

const HOST = "http://192.168.50.166:5000";

console.log("Js works");

const server = http.createServer(app);

// Store the data for each namespace
const namespaceData = {};

app.post("/update_data", async (req, res) => {
  const { session_id, user_id, namespace, new_date, new_timestamp } = req.body;
  try {
    const Game = await GameInfo.find({ namespace });
    console.log(typeof Game);
    var foundObject = findGameInfoById(Game, req.body.user_id);
    //socket
    socket.on("update_data_result", async function (data) {
      console.log(data);
      await GameInfo.findByIdAndUpdate({ _id: foundObject._id }, data);
      console.log("[update_data_result] data got: " + JSON.stringify(data));
    });
    // testSocket(
    //   obj.update_data_result,
    //   GameInfo.findByIdAndUpdate({ _id: foundObject._id }, data)
    // );
    //socket

    function findGameInfoById(game, user_id) {
      for (let i = 0; i < game.length; i++) {
        if (game[i].user_id == user_id) {
          return game[i];
        }
      }
    }

    console.log(foundObject);
    let oldGameInfo = {
      session_id: socket.id,
      namespace: foundObject.namespace,
      date: foundObject.new_date,
      timestamp: foundObject.new_timestamp,
    };

    // GameInfo.findByIdAndUpdate(foundObject._id, {})

    // for (let i = 0; i < user.gameInfo.length; i++) {
    //   // console.log(user.gameInfo[i]);
    //   // console.log(Game[i]._id);

    //   if (Game[i]._id) {
    //     console.log(Game[i]._id);

    //     let gameUpdate = await GameInfo.findByIdAndUpdate(Game[i]._id, {
    //       new_date,
    //       new_timestamp: new_timestamp,
    //     });
    //   }
    //   break;
    // }

    const res = await axios
      .post(`${HOST}/update_data`, oldGameInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });

    res.json({
      session_id,
      new_date,
      timestamp,
      namespace,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/send_prompt", async (req, res) => {
  const { prompt, chat_history, namespace } = req.body;
  try {
    console.log(req.body);

    let dataSocket = null;
    socket.on("send_prompt_result", async function (data) {
      task_id: data.task_id;
      answer: data.answer;
      dataSocket = data;
      // frontendSocket.emit(send_prompt_result, data.answer);
      console.log("[send_prompt_result] data got: " + JSON.stringify(data));
    });

    const promptData = {
      session_id: socket.id,
      prompt,
      chat_history,
      namespace: "410970_Master_of_Orion_1",
    };
    console.log("promtData", promptData);

    await axios
      .post(`${HOST}/send_prompt`, promptData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
    while (dataSocket == null) {
      await new Promise((r) => setTimeout(r, 2000));
    }
    res.json({
      answer: dataSocket.answer,
    });
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
});

app.post("/app_connect", (req, res) => {
  // const socketId = req.query['socket'];
  const { ...rest } = req.body;
});

app.post("/user/create", User.create);

app.post("/upload_url", async (req, res) => {
  const { game_url, user_id, ...rest } = req.body;
  try {
    if (game_url) {
      const inputString = game_url;
      const regex = /\/app\/(\d+)\/(.*?)\//;
      const match = inputString.match(regex);
      var gameId = match[1];
      var gameName = match[2];
    }

    const gameFind = await GameInfo.findOne({ gameId });
    if (gameFind) {
      res.status(200).json({ message: "This is alrady available" });
      return;
    }

    //socket
    let saveObj;
    socket.on("upload_url_result", async function (data) {
      saveObj = {
        user_id,
        gameId,
        gameName,
        task_id: data.task_id,
        display_name: data.display_name,
        namespace: data.namespace,
        new_date: data.new_date,
        new_timestamp: data.new_timestamp,
      };

      try {
        const game = new GameInfo(saveObj);
        await game.save();

        const user = await User.findById({ _id: game.user_id });
        user.gameInfo.push(game);
        await user.save();
      } catch (error) {
        console.log("game and user save error: ", error);
      }

      console.log("[upload_url_result] data get: " + JSON.stringify(data));
    });

    // socket.on("upload_url_result", async function (data) {
    //   // findAndEditDBObject(); /// update saveObj
    //   // saveObj = {
    //   //   user_id,
    //   //   gameId,
    //   //   gameName,
    //   //   task_id: null,
    //   //   display_name: null,
    //   //   namespace: null,
    //   //   new_date: null,
    //   //   new_timestamp: null,
    //   // };
    //   // function findUpdateObjsctDb(microData) {
    //     saveObj = {
    //       user_id,
    //       gameId,
    //       gameName,
    //       task_id: microData.task_id,
    //       display_name: microData.display_name,
    //       namespace: microData.namespace,
    //       new_date: microData.new_date,
    //       new_timestamp: microData.new_timestamp,
    //     };

    //     const game = new GameInfo(saveObj);
    //     return game;
    //   // }
    //   const gameTest = await findUpdateObjsctDb(data);
    //   await gameTest.save();

    //   const user = await User.findById({ _id: gameTest.user_id });
    //   user.gameInfo.push(gameTest);
    //   await user.save();

    //   // console.log(saveObj);

    //   console.log("[upload_url_result] data got: " + JSON.stringify(data));
    // });

    let gameInfo = {
      session_id: socket.id,
      game_url: game_url,
    };

    axios.post(`${HOST}/upload_url`, gameInfo).catch((error) => {
      console.log("upload_url POST error: ", error.message);
    });

    // await axios
    //   .post(`${HOST}/upload_url`, gameInfo)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    // uploadEmptyObjectToDB(); //save saveObj

    res.status(200).json({ success: true, gameName, gameId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/refresh", async (req, res) => {
  const { user_id, game_id, gameName, gameId } = req.body;
  try {
    if (!gameName) {
      res.status(400).json({ message: "Game name is not defined" });
      return;
    }

    const gameInfo = await GameInfo.findOne({ gameName });
    console.log("gameINfo", gameInfo);

    let gameObject;
    if (gameInfo) {
      gameObject = {
        name: gameInfo.gameName,
        namespace: gameInfo.namespace,
      };
      res.status(200).json({ gameObject });
    } else {
      res.status(200).json({ message: "Your data is being prepared" });
    }

    // let draft = {
    //   name: gameInfo.gameName,
    //   namespace: gameInfo.namespace,
    // };
    // console.log(draft);

    // res.status(200).json({ gameObject });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post(`/get_database`, async (req, res) => {
  const { session_id, ...rest } = req.body;
  try {
    // console.log("give to Front data", session_id, rest);
    const user_id = req.body.user_id;
    console.log(user_id);
    const gameInfo = await GameInfo.find({ user_id });
    // const userGames = {

    // }
    // console.log(gameInfo);

    const arr = gameInfo.map((el, i) => ({
      name: el.display_name,
      namespace: el.namespace,
    }));
    console.log(arr2);
    // console.log(gameInfo.display_name);
    // console.log(gameInfo.namespace);
    // const gameSendUI = {
    //   name: gameInfo.display_name,
    //   namespace: gameInfo.namespace
    // }

    // console.log(req.body.task_id);
    // console.log(req.body.namespaces_list);

    // socket.on("get_database_result", async function (data) {
    //   console.log(data);
    //   // const game = await DBGame.create({
    //   //   task_id: data.task_id,
    //   //   namespaceList: data.namespaces_list,
    //   // });
    //   console.log("task_id" + data.task_id);
    //   console.log("namepaces_list" + data.namespaces_list);
    //   console.log("[get_database_result] data got: " + JSON.stringify(data));
    // });

    // await axios
    //   .post("http://192.168.50.129:5000/get_database", session_id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    res.json({
      answer: "Success",
      arr,
    });
  } catch (error) {
    error.message;
  }
});

server.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});
connectDB();
