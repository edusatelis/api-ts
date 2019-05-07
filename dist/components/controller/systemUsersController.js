"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const systemUsersService_1 = require("./../services/systemUsersService");
const helper_1 = require("./../../config/helpers/helper");
class SystemUsersController {
    get(req, res) {
        systemUsersService_1.default.get()
            .then(SystemUsers => helper_1.default.sendResponse(res, HttpStatus.OK, SystemUsers))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        systemUsersService_1.default.getById(_id)
            .then(SystemUsers => helper_1.default.sendResponse(res, HttpStatus.OK, SystemUsers))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        const user = req.body;
        systemUsersService_1.default.create(user)
            .then(SystemUsers => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario Cadastrado com Sucesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let user = req.body;
        systemUsersService_1.default.update(_id, user)
            .then(SystemUsers => helper_1.default.sendResponse(res, HttpStatus.OK, `O usuario ${user.name} foi atualizado com Sucesso`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        systemUsersService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario Deletado com Sucesso!")).catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new SystemUsersController();
