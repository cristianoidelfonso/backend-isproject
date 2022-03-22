import { Request, Response, NextFunction } from 'express';
import Item from '../models/item';
import itensRepository from '../repositories/itens.repository';

module.exports.index = (req : Request, res: Response, next: NextFunction) => {
  itensRepository.lerTodos((itens) => res.json(itens))
}

module.exports.store = (req: Request, res: Response, next: NextFunction) => {
  const item: Item = req.body
  itensRepository.criar(item, (id) => {
    if (id) {
      res.status(201).location(`/itens/${id}`).send()
    } else {
      res.status(400).send()
    }
  })
}

module.exports.show = (req: Request, res: Response, next:NextFunction) => {
  const id: number = +req.params.id
  itensRepository.ler(id, (item) => {
    if (item) {
      res.json(item)
    } else {
      res.status(404).send()
    }
  })
}

module.exports.update = (req: Request, res: Response, next: NextFunction) => {
  const id: number = +req.params.id
  itensRepository.atualizar(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send()
    } else {
      res.status(204).send()
    }
  })
}

module.exports.destroy = (req: Request, res: Response, next: NextFunction) => {
  const id: number = +req.params.id
  itensRepository.apagar(id, (notFound) => {
    if (notFound) {
      res.status(404).send()
    } else {
      res.status(204).send()
    }
  })
}