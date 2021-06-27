import { Request, Response } from 'express';
import { UserService } from '../Services/UsersService';
class UserController {

  async store(request: Request, response: Response) {
    try {
      const {
        document,
        contract,
        username,
        occupation,
        email,
        telefone1,
        telefone2 } = request.body;
      const userservice = new UserService();
      await userservice.create(
        contract,
        document,
        username,
        occupation,
        email,
        telefone1,
        telefone2
      );

      return response.json('usuário criado com sucesso');
    } catch (e) {
      return response.status(400).json({
        errors: e.message.split(',')
      })
    }
  }
  async list(request: Request, response: Response) {
    try {
      const userservice = new UserService();

      const users = await userservice.getAll();

      return response.json(users);
    } catch (e) {
      return response.status(400).json({
        errors: e.message.split(',')
      })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { email } = request.params;
      const userservice = new UserService();
      const users = await userservice.getUser(email);



      return response.json(users);
    } catch (e) {
      return response.status(400).json({
        errors: e.message.split(',')
      })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const {
        document,
        contract,
        username,
        occupation,
        email,
        telefone1,
        telefone2, } = request.body;

      const userservice = new UserService();
      await userservice.update(
        document,
        contract,
        username,
        occupation,
        email,
        telefone1,
        telefone2,
        id);
      return response.json('Usuário atualizado');

    } catch (e) {
      return response.status(400).json({
        errors: e.message.split(',')
      });
    }
  }

  async get(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const userservice = new UserService();
      const users = await userservice.getUserData(id);
      return response.json(users);
    } catch (e) {
      return response.status(400).json({
        errors: e.message.split(',')
      })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const userservice = new UserService();
      await userservice.delete(id);
      return response.json('Usuário deletado com sucesso.');
    } catch (e) {
      return response.status(400).json({
        errors: e.message.split(',')
      })
    }
  }
}

export default new UserController();