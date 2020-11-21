const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const projectSchema = new Schema(

    {
        name: { type: String },
        description: { type: String },
        github_url: { type: String },
        participants:{ type: Number },
        creator: { type: String }
      }
);

module.exports = model('projects', projectSchema);
