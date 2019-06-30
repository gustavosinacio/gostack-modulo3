import * as Yup from 'yup';
import User from '../models/User';

const MIN_PASSWORD_LENGTH = 6;

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(MIN_PASSWORD_LENGTH),
      provider: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation failed' });

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists)
      return res.status(400).json({ error: 'Email already in use' });

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(MIN_PASSWORD_LENGTH),
      password: Yup.string()
        .min(MIN_PASSWORD_LENGTH)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      provider: Yup.boolean(),
    });

    const isValid = await schema.isValid(req.body);
    if (!isValid)
      return res.status(400).json({ error: 'Validation failed', isValid });

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    // Checking if new email is already being used in the database
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists)
        return res.status(400).json({ error: 'Email already in use' });
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
