"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
/*
verifica se existe o
arquivo ormconfig e pega os dados
de la para fazer a conexão */
typeorm_1.createConnection().then(function () { return console.log('connected with db'); });
