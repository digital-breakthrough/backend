import express from 'express';

import users from '../../controllers/users';
import auth from '../../controllers/auth';

const routes  = express.Router();

routes.route('/:id')
  .get(auth.verifyToken, users.read)
  .put(auth.verifyToken, users.update)

routes.route('/')
  .get(users.list)
  .post(users.create);

module.exports = routes;
