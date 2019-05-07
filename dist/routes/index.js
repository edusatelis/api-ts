"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Router = express.Router();
Router.route('/oapi/v1/login').post();
exports.default = Router;
