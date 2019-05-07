"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String },
    cpf: { type: String },
    email: { type: String },
    password: { type: String },
    confirm_password: { type: String },
    termsUse: { type: Boolean }
});
exports.default = userSchema;
