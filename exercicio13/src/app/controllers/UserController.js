import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // define o schema
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    // verfica se dados são validos
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    /*
    Procura usuário com o mesmo email passado no body
    */
    const userExists = await User.findOne({ where: { email: req.body.email } });

    /*
    Se existe, retorna erro
    */

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    /*
    Cria o usuário passado no body
    */

    const { id, name, email } = await User.create(req.body);

    /*
    retorna o usuário criado num json
    */

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
