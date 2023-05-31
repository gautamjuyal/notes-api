const mongoose = require("mongoose");

const voiceNoteSchema = new mongoose.Schema({
  audio: {
    type: Buffer,
    required: true,
  },
  name: String,
  Date: String,
});

const voiceNote = new mongoose.model("voiceNote", voiceNoteSchema);

exports.getVoiceNotes = async (req, res) => {
  try {
    const voiceNotes = await voiceNote.find();
    res.status(200).json({
      status: "success",
      data: voiceNotes,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

exports.postVoiceNote = async (req, res) => {
  try {
    const newVoiceNote = await voiceNote.create({ ...req.body });
    res.status(200).json({
      status: "success",
      data: newVoiceNote,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

exports.deleteVoiceNote = async (req, res) => {
  try {
    await voiceNote.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};
