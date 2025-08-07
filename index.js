const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Configura o body-parser para ler JSON
app.use(bodyParser.json());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Criação das tabelas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Turma(
  	        tu_id VARCHAR(12) PRIMARY KEY UNIQUE,
  	        tu_nome VARCHAR(40) NOT NULL,
  	        tu_desc VARCHAR(120)
        );
    `);
    
    console.log('Tabelas criadas com sucesso.');
});

// Cadastrar turma
app.post('/turma', (req, res) => {
    const { id, nome, desc } = req.body;

    if (!nome) {
        return res.status(400).send('Nome é um campo obrigatório.');
    }

    const query = `INSERT INTO Turma (id, nome, desc) VALUES (?, ?, ?)`;
    db.run(query, [id, nome, desc], function (err) {
        if (err) {
            return res.status(500).send('Erro ao cadastrar turma.');
        }
        res.status(201).send({ id: this.lastID, message: 'Turma cadastrada com sucesso.' });
    });
});
