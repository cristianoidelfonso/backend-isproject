import { Request, Response, NextFunction } from 'express';
import Category from '../models/category';
import categoriesRepository from '../repositories/categories.repository';

module.exports.index = (req : Request, res: Response, next: NextFunction) => {
  categoriesRepository.lerTodos((categories) => res.json(categories))
}

module.exports.store = (req: Request, res: Response, next: NextFunction) => {
  const category: Category = req.body
  categoriesRepository.criar(category, (id) => {
    if (id) {
      res.status(201).location(`/categories/${id}`).send()
    } else {
      res.status(400).send()
    }
  })
}

module.exports.show = (req: Request, res: Response, next:NextFunction) => {
  const id: number = +req.params.id
  categoriesRepository.ler(id, (category) => {
    if (category) {
      res.json(category)
    } else {
      res.status(404).send()
    }
  })
}

module.exports.update = (req: Request, res: Response, next: NextFunction) => {
  const id: number = +req.params.id
  categoriesRepository.atualizar(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send()
    } else {
      res.status(204).send()
    }
  })
}

module.exports.destroy = (req: Request, res: Response, next: NextFunction) => {
  const id: number = +req.params.id
  categoriesRepository.apagar(id, (notFound) => {
    if (notFound) {
      res.status(404).send()
    } else {
      res.status(204).send()
    }
  })
}