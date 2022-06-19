import Database from "../infra/Database.js";

//nome da tabela "clientes"

export default class Metodos {
    static criaTab () {
        const query = `CREATE TABLE IF NOT EXISTS clientes (
            nome VARCHAR PRIMARY KEY,
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
        const query = `INSERT INTO clientes VALUES (?,?,?)`
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

    static listaClientePorNome(nome) {
        const query = `SELECT * FROM clientes WHERE nome = ${nome}`;
        return new Promise((resolve, reject) =>{
            Database.all(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({clientes: registros});
            });
        });
    }

    static atualizaPorNome(nome, cliente) {
        const query = `UPDATE clientes SET(nome,nome,telefone)=(?,?,?) WHERE nome=${nome}`;
        const clienteArr = Object.values(cliente);
        return new Promise((resolve, reject) => {
            Database.run(query, clienteArr, error => {
                if (error) reject(error.message);
                else resolve('Cliente atualizado com sucesso!');
            });
        });
    }

    static deletaPorNome(nome) {
        const query = `DELETE FROM clientes WHERE nome=${nome}`;
        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message);
                else resolve('Cliente deletado com sucesso!');

            });
        });
    }
}