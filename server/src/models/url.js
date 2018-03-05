import mongoose from 'mongoose';

const {Schema} = mongoose;

const urlSchema = new Schema({
  id: Number,
  path: String,
  description: String,
});

const Url = mongoose.model('Url', urlSchema);

export default Url;
