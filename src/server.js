import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";

const app = express();

app.use(express.json()); // entender que o formato da req é um json.

app.post("/users", UserController.store);

app.listen(process.env.LOCAL_HOST, () => {
  console.log(`Server running on localhost:${process.env.LOCAL_HOST}`);
});
