import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, unique: true },
  video: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
