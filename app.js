const express = require("express");
const cors = require("cors");
const notesController = require("./controllers/notesController");
const ttsController = require("./controllers/ttsController");
const voiceNotesController = require("./controllers/voiceNotesController");

const app = express();

app.use(express.json());
app.use(cors());

const getAllNotes = (req, res) => {};

const notesRouter = express.Router();
const ttsRouter = express.Router();
const voiceNotesRouter = express.Router();

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

voiceNotesRouter
  .route("/")
  .get(voiceNotesController.getVoiceNotes)
  .post(voiceNotesController.postVoiceNote);
voiceNotesRouter.route("/:id").delete(voiceNotesController.deleteVoiceNote);

app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/tts", ttsRouter); //middleware used at end since notesrouter needs to be cofig before using it
app.use("/api/v1/voiceNotes", voiceNotesRouter);

module.exports = app;
