const mongoose = require("mongoose")
const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true },
    github_url: { type: String, required: true },
    participants: { type: Number, required: true },
    creator: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model('Project', projectSchema);

module.exports = Project