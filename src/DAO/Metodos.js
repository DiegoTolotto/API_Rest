import Database from "../infra/Database.js";

//nome da tabela "clientes"

export default class Metodos {
    static criaTab () {
        const query = `CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR 
        )`
        return new Promise ((resolve, reject) => {
            Database.run(query, error =>{
                if (error) reject(error.message);
                else resolve('Tabela clientes criada com sucesso!');
            });
        }); 
    }

    static insereCliente(cliente){
        const query = `INSERT INTO clientes (nome, email, telefone) VALUES (?,?,?)`
        const clienteArr = Object.values(cliente);
        return new Promise ((resolve, reject) => {
            Database.run(query, clienteArr, error => {
                if(error) reject(error.message);
                else resolve('Cliente inserido com sucesso!');
            }); 
        });
    }

    static listaClientes() {
        const query = 'SELECT * FROM clientes';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({clientes: registros});    
            });
        });
    }

    static listaClientePorId(id) {
        const query = `SELECT * FROM clientes WHERE id = ${id}`;
        return new Promise((resolve, reject) =>{
            Database.get(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({clientes: registros});
            });
        });
    }

    static atualizaPorId(id, cliente) {
        const query = `UPDATE clientes SET(nome, email, telefone)=(?,?,?) WHERE id=${id}`;
        const clienteArr = Object.values(cliente);
        return new Promise((resolve, reject) => {
            Database.run(query, clienteArr, error => {
                if (error) reject(error.message);
                else resolve('Cliente atualizado com sucesso!');
            });
        });
    }

    static deletaPorId(id) {
        const query = `DELETE FROM clientes WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message);
                else resolve('Cliente deletado com sucesso!');

            });
        });
    }
}