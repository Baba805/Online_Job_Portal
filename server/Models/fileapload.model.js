const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  file : String
});

const FileUploadModel = mongoose.model('FileUpload', fileUploadSchema);

module.exports = FileUploadModel;