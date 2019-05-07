"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema_1 = require("../models/userSchema");
exports.default = mongoose.model("SystemUsers", userSchema_1.default);
