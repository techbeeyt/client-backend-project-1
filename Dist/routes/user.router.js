"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.post('/create-new-user', user_controller_1.createUser);
userRouter.post('/edit-profile', user_controller_1.editProfile);
exports.default = userRouter;
