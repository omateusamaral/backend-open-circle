import { createConnection } from 'typeorm';
/*
verifica se existe o 
arquivo ormconfig e pega os dados 
de la para fazer a conexão */
createConnection().then(()=>console.log('connected with db'));