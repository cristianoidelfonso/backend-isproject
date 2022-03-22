import express from 'express';
const categoryController = require('../controllers/category.controller');
const itensRouter = express.Router();

itensRouter.get('/categories', categoryController.index);
itensRouter.get('/categories/:id', categoryController.show);
itensRouter.post('/categories', categoryController.store);
itensRouter.patch('/categories/:id', categoryController.update);
itensRouter.put('/categories/:id', categoryController.update);
itensRouter.delete('/categories/:id', categoryController.destroy);

export default itensRouter