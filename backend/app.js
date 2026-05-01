const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Mongo connection (service name use kar rahe hain)
mongoose.connect("mongodb://mongo:27017/notes");

const Note = mongoose.model("Note", { text: String });

// GET notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// ADD note
app.post("/notes", async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.send("Note added");
});

app.listen(5000, () => console.log("Backend running 🚀"));