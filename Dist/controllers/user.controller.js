"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProfile = exports.createUser = void 0;
const createUser = async (req, res) => {
    const { userName, fullName, email, password, phone_number, profile_url } = req.body;
    res.send({
        success: true,
        message: {
            userName, fullName, email, password, phone_number, profile_url
        }
    });
};
exports.createUser = createUser;
const editProfile = async (req, res) => {
    const { userName, fullName, email, password, phone_number, profile_url } = req.body;
    res.send({
        success: true,
        message: {
            userName, fullName, email, password, phone_number, profile_url
        }
    });
};
exports.editProfile = editProfile;
