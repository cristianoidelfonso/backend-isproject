import express from 'express';
const itemController = require('../controllers/item.controller');
const itensRouter = express.Router();

itensRouter.get('/itens', itemController.index);
itensRouter.get('/itens/:id', itemController.show);
itensRouter.post('/itens', itemController.store);
itensRouter.patch('/itens/:id', itemController.update);
itensRouter.put('/itens/:id', itemController.update);
itensRouter.delete('/itens/:id', itemController.destroy);

export default itensRouter