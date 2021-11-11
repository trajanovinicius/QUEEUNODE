import express from "express";
import UserController from "./app/controllers/UserController";

const app = express();

app.use(express.json()); // entender que o formato da req é um json.

app.post("/users", UserController.store);

app.listen(3333, () => {
  console.log("Server running on localhost:3333");
});
