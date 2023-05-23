const express = require("express");
const cors = require("cors");
const notesController = require("./controllers/notesController");
const ttsController = require("./controllers/ttsController");

const app = express();

app.use(express.json());
app.use(cors());

const getAllNotes = (req, res) => {};

const notesRouter = express.Router();
const ttsRouter = express.Router();

notesRouter
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNote);
notesRouter
  .route("/:id")
  .get(notesController.getNote)
  .patch(notesController.editNote)
  .delete(notesController.deleteNote);
ttsRouter.route("/:id").post(ttsController.postTtsText);

app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/tts", ttsRouter); //middleware used at end since notesrouter needs to be cofig before using it

module.exports = app;
