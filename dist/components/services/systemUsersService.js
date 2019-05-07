"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signupRepository_1 = require("../../config/repository/signupRepository");
class SystemUsersService {
    get() {
        return signupRepository_1.default.find({});
    }
    getById(_id) {
        return signupRepository_1.default.findById(_id);
    }
    create(SystemUsers) {
        return signupRepository_1.default.create(SystemUsers);
    }
    update(_id, SystemUsers) {
        return signupRepository_1.default.findByIdAndUpdate(_id, SystemUsers);
    }
    delete(_id) {
        return signupRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new SystemUsersService();
