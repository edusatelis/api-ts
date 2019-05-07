import * as mongoose from 'mongoose';
import userSchema from '../models/userSchema';

export default mongoose.model("SystemUsers", userSchema);