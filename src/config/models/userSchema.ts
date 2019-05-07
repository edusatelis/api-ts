import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String },
    cpf: {type: String},
    email: {type: String},
    password: {type: String},
    confirm_password: {type: String},
    termsUse: {type: Boolean}
});

export default userSchema;