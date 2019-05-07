import * as HttpStatus from 'http-status';

import SystemUsersService from './../services/systemUsersService';
import Helper from './../../config/helpers/helper'

class SystemUsersController {

    
    get(req, res) {
        SystemUsersService.get()
            .then(SystemUsers => Helper.sendResponse(res, HttpStatus.OK, SystemUsers))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {

        const _id = req.params.id;

        SystemUsersService.getById(_id)
            .then(SystemUsers => Helper.sendResponse(res, HttpStatus.OK, SystemUsers))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }
    create(req, res) {
        const user = req.body;
        SystemUsersService.create(user)
            .then(SystemUsers => Helper.sendResponse(res, HttpStatus.OK, "Usuario Cadastrado com Sucesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let user = req.body;

        SystemUsersService.update(_id, user)
            .then(SystemUsers => Helper.sendResponse(res, HttpStatus.OK, `O usuario ${user.name} foi atualizado com Sucesso`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;

        SystemUsersService.delete(_id)
            .then(
                () => Helper.sendResponse(res,HttpStatus.OK,"Usuario Deletado com Sucesso!"),
                
            ).catch(error => console.error.bind(console, `Error ${error}`))
    }
}

export default new SystemUsersController();