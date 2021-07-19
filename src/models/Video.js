import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, uppercase: true, trim: true, maxLength: 80 },
  description: { type: String, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

const Video = mongoose.model("videomodels", videoSchema);
export default Video;
