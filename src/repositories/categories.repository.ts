import Category from '../models/category';
import database from './database';

const categoriesRepository = {
  criar: (category: Category, callback: (id?: number) => void) => {
    const sql = 'INSERT INTO categories (name) VALUES (?)'
    const params = [category.name]
    database.run(sql, params, function (_err) {
      callback(this?.lastID)
    })
  },

  lerTodos: (callback: (categories: Category[]) => void) => {
    const sql = 'SELECT * FROM categories'
    const params: any[] = []
    database.all(sql, params, (_err, rows) => callback(rows))
  },

  ler: (id: number, callback: (category?: Category) => void) => {
    const sql = 'SELECT * FROM categories WHERE id = ?'
    const params = [id]
    database.get(sql, params, (_err, row) => callback(row))
  },

  atualizar: (id: number, category: Category, callback: (notFound: boolean) => void) => {
    const sql = 'UPDATE categories SET name = ? WHERE id = ?'
    const params = [category.name, id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },

  apagar: (id: number, callback: (notFound: boolean) => void) => {
    const sql = 'DELETE FROM categories WHERE id = ?'
    const params = [id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },
}

export default categoriesRepository;