import express from 'express';
import multer from 'multer';
import multerconfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerconfig);

routes.get('/items', new ItemsController().index);

routes.post('/points', upload.single('image'), new PointsController().create);
routes.get('/points/', new PointsController().index);
routes.get('/points/:id', new PointsController().show);

export default routes;
