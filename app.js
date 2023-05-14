const express = require("express");
const cors = require("cors");
const notesController = require("./controllers/notesController");

const app = express();

app.use(express.json());
app.use(cors());

const getAllNotes = (req, res) => {};

const notesRouter = express.Router();

notesRouter
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNote);
notesRouter
  .route("/:id")
  .get(notesController.getNote)
  .patch(notesController.editNote)
  .delete(notesController.deleteNote);

app.use("/api/v1/notes", notesRouter); //middleware used at end since notesrouter needs to be cofig before using it

module.exports = app;
