const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Brand Schema
const BrandSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  slug: {
    type: String,
  },
  image: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('Brand', BrandSchema);
