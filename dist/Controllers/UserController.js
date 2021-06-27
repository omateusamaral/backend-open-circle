"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UsersService_1 = require("../Services/UsersService");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.store = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, document, contract, username, occupation, email, telefone1, telefone2, userservice, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, document = _a.document, contract = _a.contract, username = _a.username, occupation = _a.occupation, email = _a.email, telefone1 = _a.telefone1, telefone2 = _a.telefone2;
                        userservice = new UsersService_1.UserService();
                        return [4 /*yield*/, userservice.create(contract, document, username, occupation, email, telefone1, telefone2)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, response.json('usuário criado com sucesso')];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                errors: e_1.message.split(',')
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userservice, users, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userservice = new UsersService_1.UserService();
                        return [4 /*yield*/, userservice.getAll()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json(users)];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                errors: e_2.message.split(',')
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, userservice, users, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        email = request.params.email;
                        userservice = new UsersService_1.UserService();
                        return [4 /*yield*/, userservice.getUser(email)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json(users)];
                    case 2:
                        e_3 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                errors: e_3.message.split(',')
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, document, contract, username, occupation, email, telefone1, telefone2, userservice, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        _a = request.body, document = _a.document, contract = _a.contract, username = _a.username, occupation = _a.occupation, email = _a.email, telefone1 = _a.telefone1, telefone2 = _a.telefone2;
                        userservice = new UsersService_1.UserService();
                        return [4 /*yield*/, userservice.update(document, contract, username, occupation, email, telefone1, telefone2, id)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, response.json('Usuário atualizado')];
                    case 2:
                        e_4 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                errors: e_4.message.split(',')
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.get = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, userservice, users, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        userservice = new UsersService_1.UserService();
                        return [4 /*yield*/, userservice.getUserData(id)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json(users)];
                    case 2:
                        e_5 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                errors: e_5.message.split(',')
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, userservice, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        userservice = new UsersService_1.UserService();
                        return [4 /*yield*/, userservice.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json('Usuário deletado com sucesso.')];
                    case 2:
                        e_6 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                errors: e_6.message.split(',')
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map