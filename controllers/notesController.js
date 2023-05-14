const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must have a title"],
  },
  subText: {
    type: String,
    required: [true, "Must have a sub text"],
  },
  isDone: {
    type: Boolean,
    required: [true, "Must have a status"],
  },
  date: {
    type: String,
    required: [true, "Must have a date"],
  },
});

const Note = mongoose.model("Note", notesSchema);

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      status: "success",
      data: notes,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

exports.createNote = async (req, res) => {
  try {
    const newNote = await Note.create({ ...req.body });
    res.status(200).json({
      status: "success",
      data: newNote,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: note,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

exports.editNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: updatedNote,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id); //in rest arch, no data is send when deletion
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};
