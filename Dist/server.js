"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// importing controllers
const user_router_1 = __importDefault(require("./routes/user.router"));
dotenv_1.default.config({ path: './.env' });
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/user', user_router_1.default);
const PORT = process.env.PORT || 3332;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
