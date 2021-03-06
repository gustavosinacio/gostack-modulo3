import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  /**
   * Available only to providers
   */
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider)
      return res.status(401).json({
        error: 'User is not a provider',
        userId: req.userId,
      });

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort('-createdAt')
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
