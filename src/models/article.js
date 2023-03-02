import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Choose a title măi băiete']
  },
  content: {
    type: String,
    required: [true, 'Add a content măi băiete']
  },
  key: {
    type: String,
    default: () => new Date().getTime().toString(32)
  }

});

export default mongoose.models?.Article || mongoose.model("Article", ArticleSchema);