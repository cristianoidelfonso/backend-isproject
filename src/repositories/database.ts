import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
    CREATE TABLE IF NOT EXISTS itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )`

const SQL_CATEGORIES_CREATE = `
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        
        database.run(SQL_ITENS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabelas [itens, categories] criadas com sucesso.')
            }
        })

        database.run(SQL_CATEGORIES_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabelas [itens, categories] criadas com sucesso.')
            }
        })
    }
})

export default database