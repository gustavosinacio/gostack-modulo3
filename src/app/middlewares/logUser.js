import User from '../models/User';

export default async (req, res, next) => {
  const user = await User.findByPk(req.userId);

  const { id, name, email, provider, avatar_id } = user;

  console.log({ id, name, email, provider, avatar_id });

  return next();
};
