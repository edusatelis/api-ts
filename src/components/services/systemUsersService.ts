import signupRepository from '../../config/repository/signupRepository';

class SystemUsersService {
    get() {
        return signupRepository.find({});
    }

    getById(_id) {
        return signupRepository.findById(_id);
    }

    create(SystemUsers) {
        return signupRepository.create(SystemUsers);
    }

    update(_id, SystemUsers) {
        return signupRepository.findByIdAndUpdate(_id, SystemUsers);
    }

    delete(_id) {
        return signupRepository.findByIdAndRemove(_id);
    }
}

export default new SystemUsersService();