"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
require("./database/connect");
var routes_1 = __importDefault(require("./routes/usersRoutes/routes"));
dotenv_1.default.config();
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.middlewares();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    };
    App.prototype.routes = function () {
        this.app.use('/users', routes_1.default);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map