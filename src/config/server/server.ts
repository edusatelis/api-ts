import * as express from 'express';
import * as bodyParser from 'body-parser';
import Router from './../../routes';
import DataBase from './../helpers/db'
import SystemUsersController from './../../components/controller/systemUsersController'

class Server{
    public app: express.Application;
    private _DataBase: DataBase;
    private bodyParser;

    constructor(){
        this.app = express();
        this._DataBase = new DataBase();
        this._DataBase.createConnection();
        this.middleware();
        this.routes();
    }
    
    middleware(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
    
    routes(){
        this.app.route('/').get((req,res) => {
            res.send({ versao : '0.0.1'})
        })

        this.app.route("/oapi/v1/users").get(SystemUsersController.get);
        this.app.route("/oapi/v1/users/:id").get(SystemUsersController.getById);
        this.app.route("/oapi/v1/signup").post(SystemUsersController.create);
        this.app.route("/oapi/v1/users/:id").put(SystemUsersController.update);
        this.app.route("/oapi/v1/users/:id").post(SystemUsersController.delete);
        // this.app.use("/", Router);
    }
    
    
}

export default new Server();