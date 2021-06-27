"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../../Controllers/UserController"));
var router = express_1.Router();
router.post('/create', UserController_1.default.store);
router.get('/', UserController_1.default.list);
router.get('/show/:email', UserController_1.default.show);
router.get('/get/user/:id', UserController_1.default.get);
router.put('/update/user/:id', UserController_1.default.update);
router.delete('/delete/:id', UserController_1.default.delete);
exports.default = router;
