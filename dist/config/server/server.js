"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./../helpers/db");
const systemUsersController_1 = require("./../../components/controller/systemUsersController");
class Server {
    constructor() {
        this.app = express();
        this._DataBase = new db_1.default();
        this._DataBase.createConnection();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route("/oapi/v1/users").get(systemUsersController_1.default.get);
        this.app.route("/oapi/v1/users/:id").get(systemUsersController_1.default.getById);
        this.app.route("/oapi/v1/signup").post(systemUsersController_1.default.create);
        this.app.route("/oapi/v1/users/:id").put(systemUsersController_1.default.update);
        this.app.route("/oapi/v1/users/:id").post(systemUsersController_1.default.delete);
        // this.app.use("/", Router);
    }
}
exports.default = new Server();
