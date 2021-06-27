"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var typeorm_1 = require("typeorm");
var yup = __importStar(require("yup"));
var User_1 = __importDefault(require("../models/User"));
var UsersRepository_1 = __importDefault(require("../Repositories/UsersRepository"));
var document_1 = __importDefault(require("../utils/document"));
var UserService = /** @class */ (function () {
    function UserService() {
        this.usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.default);
    }
    UserService.prototype.create = function (contract, document, username, occupation, email, telefone1, telefone2) {
        return __awaiter(this, void 0, void 0, function () {
            var result, schema, userExists, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document = document.replace(/\D/g, '');
                        result = document_1.default(document);
                        if (!result) {
                            throw new Error('Documento inválido');
                        }
                        telefone1 = telefone1.replace(/\D/g, '');
                        if (telefone2.length > 0) {
                            telefone2 = telefone2.replace(/\D/g, '');
                        }
                        schema = yup.object().shape({
                            contract: yup.string()
                                .typeError('Regime inválido')
                                .required('Campo Regime é obrigatório')
                                .min(2, 'Contrato deve ter no mínimo dois caracteres'),
                            username: yup.string()
                                .typeError('Nome do usuário inválido.')
                                .required('Nome do usuário é obrigatório.')
                                .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres.')
                                .max(50, 'Nome de usuário deve ter no máximo 50 caracteres.'),
                            occupation: yup.string()
                                .typeError('Nome de ocupação inválido.')
                                .required('Nome de ocupação é obrigatório.')
                                .min(3, 'Nome de ocupação deve ter no mínimo 3 caracteres.')
                                .max(50, 'Nome de ocupação deve ter no máximo 50 caracteres.'),
                            email: yup.string().email('E-mail inválido.')
                                .typeError('E-mail inválido.')
                                .required('E-mail é obrigatório.'),
                            telefone1: yup.string()
                                .typeError('Numero de telefone 1 inválido.')
                                .required('Número de telefone 1 é obrigatório.')
                                .min(5, 'telefone 1 deve ter no mínimo 5 caracteres.')
                                .max(15, 'Telefone 1 deve ter no máximo 15 caracteres.'),
                            document: yup.string().typeError("Erro no documento.")
                                .min(11, "documento deve ter no mínimo 11 caracteres.")
                                .max(14, "documento deve ter no mínimo 14 caractres")
                        });
                        return [4 /*yield*/, schema.validate({
                                contract: contract,
                                username: username,
                                occupation: occupation,
                                email: email,
                                telefone1: telefone1,
                            }, {
                                abortEarly: false
                            }).catch(function (e) {
                                throw new Error(e.errors);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.usersRepository.findOne({
                                where: {
                                    email: email,
                                    document: document
                                }
                            })];
                    case 2:
                        userExists = _a.sent();
                        if (userExists) {
                            throw new Error('Usuário já existe com este documento/email');
                        }
                        return [4 /*yield*/, this.usersRepository.create({
                                document: document,
                                contract: contract,
                                username: username,
                                occupation: occupation,
                                email: email,
                                telefone1: telefone1,
                                telefone2: telefone2,
                            })];
                    case 3:
                        user = _a.sent();
                        return [4 /*yield*/, this.usersRepository.save(user)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usersFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.find()];
                    case 1:
                        usersFounded = _a.sent();
                        if (!usersFounded) {
                            throw new Error('Não foi possível pegar usuários');
                        }
                        return [2 /*return*/, usersFounded];
                }
            });
        });
    };
    UserService.prototype.getUser = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var foundUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne({
                            email: email
                        })];
                    case 1:
                        foundUser = _a.sent();
                        if (!foundUser) {
                            throw new Error('Usuário não encontrado');
                        }
                        return [2 /*return*/, foundUser];
                }
            });
        });
    };
    UserService.prototype.getUserData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getAllData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            throw new Error('Usuário não encontrado');
                        }
                        return [4 /*yield*/, this.usersRepository.findOne({
                                id: id
                            })];
                    case 1:
                        getAllData = _a.sent();
                        if (!getAllData) {
                            throw new Error('Não foi possível pegar os dados do usuário');
                        }
                        return [2 /*return*/, getAllData];
                }
            });
        });
    };
    UserService.prototype.update = function (document, contract, username, occupation, email, telefone1, telefone2, id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, schema, userExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            throw new Error('Usuário não encontrado');
                        }
                        document = document.replace(/\D/g, '');
                        result = document_1.default(document);
                        if (!result) {
                            throw new Error('Documento inválido');
                        }
                        telefone1 = telefone1.replace(/\D/g, '');
                        if (telefone2.length > 0) {
                            telefone2 = telefone2.replace(/\D/g, '');
                        }
                        schema = yup.object().shape({
                            contract: yup.string()
                                .typeError('Regime inválido')
                                .required('Campo Regime é obrigatório')
                                .min(2, 'Contrato deve ter no mínimo dois caracteres'),
                            username: yup.string()
                                .typeError('Nome do usuário inválido.')
                                .required('Nome do usuário é obrigatório.')
                                .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres.')
                                .max(50, 'Nome de usuário deve ter no máximo 50 caracteres.'),
                            occupation: yup.string()
                                .typeError('Nome de ocupação inválido.')
                                .required('Nome de ocupação é obrigatório.')
                                .min(3, 'Nome de ocupação deve ter no mínimo 3 caracteres.')
                                .max(50, 'Nome de ocupação deve ter no máximo 50 caracteres.'),
                            email: yup.string().email('E-mail inválido.')
                                .typeError('E-mail inválido.')
                                .required('E-mail é obrigatório.'),
                            telefone1: yup.string()
                                .typeError('Numero de telefone 1 inválido.')
                                .required('Número de telefone 1 é obrigatório.')
                                .min(5, 'telefone 1 deve ter no mínimo 5 caracteres.')
                                .max(15, 'Telefone 1 deve ter no máximo 15 caracteres.'),
                            document: yup.string().typeError("Erro no documento.")
                                .min(11, "documento deve ter no mínimo 11 caracteres.")
                                .max(14, "documento deve ter no mínimo 14 caractres")
                        });
                        return [4 /*yield*/, schema.validate({
                                contract: contract,
                                username: username,
                                occupation: occupation,
                                email: email,
                                telefone1: telefone1,
                                telefone2: telefone2
                            }, {
                                abortEarly: false
                            }).catch(function (e) {
                                throw new Error(e.errors);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.usersRepository.createQueryBuilder().
                                where("(email=:email OR document=:document) AND id!=:id", {
                                email: email,
                                document: document,
                                id: id
                            })
                                .getMany()];
                    case 2:
                        userExists = _a.sent();
                        if (!userExists) {
                            throw new Error('Usuário já existe com este documento/email');
                        }
                        return [4 /*yield*/, this.usersRepository.createQueryBuilder().
                                update(User_1.default)
                                .set({ document: document, contract: contract, username: username, occupation: occupation, email: email, telefone1: telefone1, telefone2: telefone2 })
                                .where("id=:id", {
                                id: id
                            })
                                .execute()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var findUserByPK;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            throw new Error('Usuário não encontrado');
                        }
                        return [4 /*yield*/, this.usersRepository.findOne({
                                id: id
                            })];
                    case 1:
                        findUserByPK = _a.sent();
                        if (!findUserByPK) {
                            throw new Error('Usuário já deletado ou inexistente');
                        }
                        return [4 /*yield*/, this.usersRepository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UsersService.js.map