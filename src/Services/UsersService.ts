import { getCustomRepository, Repository } from "typeorm";
import * as yup from 'yup';
import User from "../models/User";
import UsersRepository from "../Repositories/UsersRepository";
import validateDocument from "../utils/document";
export class UserService {
  private usersRepository: Repository<User>;
  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(
    contract: string,
    document: string,
    username: string,
    occupation: string,
    email: string,
    telefone1: string,
    telefone2: string) {



    document = document.replace(/\D/g, '');
    let result = validateDocument(document);
    if (!result) {
      throw new Error('Documento inválido');
    }
    telefone1 = telefone1.replace(/\D/g, '');
    if (telefone2.length > 0) {
      telefone2 = telefone2.replace(/\D/g, '');
    }
    const schema = yup.object().shape({
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

    await schema.validate(
      {
        contract,
        username,
        occupation,
        email,
        telefone1,
      }, {
      abortEarly: false
    }
    ).catch((e) => {
      throw new Error(e.errors);
    })
    const userExists = await this.usersRepository.findOne({
      where: {
        email,
        document
      }
    })

    if (userExists) {
      throw new Error('Usuário já existe com este documento/email');
    }

    const user = await this.usersRepository.create({
      document,
      contract,
      username,
      occupation,
      email,
      telefone1,
      telefone2,
    });

    await this.usersRepository.save(user);
    return user;
  }

  async getAll() {
    const usersFounded = await this.usersRepository.find();

    if (!usersFounded) {
      throw new Error('Não foi possível pegar usuários');
    }

    return usersFounded;
  }

  async getUser(email: string) {

    const foundUser = await this.usersRepository.findOne({
      email
    }
    );
    if (!foundUser) {
      throw new Error('Usuário não encontrado');
    }

    return foundUser;
  }

  async getUserData(id: string) {
    if (!id) {
      throw new Error('Usuário não encontrado');
    }

    const getAllData = await this.usersRepository.findOne({
      id
    });

    if (!getAllData) {
      throw new Error('Não foi possível pegar os dados do usuário');
    }

    return getAllData;
  }

  async update(
    document: string,
    contract: string,
    username: string,
    occupation: string,
    email: string,
    telefone1: string,
    telefone2: string,
    id: string
  ) {

    if (!id) {
      throw new Error('Usuário não encontrado');
    }

    document = document.replace(/\D/g, '');
    let result = validateDocument(document);
    if (!result) {
      throw new Error('Documento inválido');
    }
    telefone1 = telefone1.replace(/\D/g, '');
    if (telefone2.length > 0) {
      telefone2 = telefone2.replace(/\D/g, '');
    }
    const schema = yup.object().shape({
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

    await schema.validate(
      {
        contract,
        username,
        occupation,
        email,
        telefone1,
        telefone2
      }, {
      abortEarly: false
    }
    ).catch((e) => {
      throw new Error(e.errors);
    })
    const userExists = await this.usersRepository.createQueryBuilder().
      where("(email=:email OR document=:document) AND id!=:id", {
        email,
        document,
        id
      })
      .getMany();

    if (!userExists) {
      throw new Error('Usuário já existe com este documento/email');
    }

    await this.usersRepository.createQueryBuilder().
      update(User)
      .set({ document, contract, username, occupation, email, telefone1, telefone2 })
      .where("id=:id", {
        id
      })
      .execute();
  }

  async delete(id: string) {

    if (!id) {
      throw new Error('Usuário não encontrado');
    }
    const findUserByPK = await this.usersRepository.findOne({
      id
    });

    if (!findUserByPK) {
      throw new Error('Usuário já deletado ou inexistente');
    }

    await this.usersRepository.delete(id);


  }
}
