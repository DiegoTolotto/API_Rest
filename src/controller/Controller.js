import Metodos from "../DAO/Metodos.js";
import ClienteModel from "../Model/ClientesModel.js";
import Validacoes from "../services/Validacoes.js";


class Controller {
    static rotas(app) {
        app.get('/users', async (req, res) => {
            try {
                const resposta = await Metodos.listaClientes();
                res.status(200).json({ mensagem: resposta });
            } catch (error) {
                res.status(400).json({ erro: error.message });
            }
        });

        app.get('/users/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await Metodos.listaClientePorId(id);
                res.status(200).json({ mensage: resposta })
            } catch (error) {
                res.status(400).json({ erro: error.message });
            }
        });


        app.post('/users', async (req, res) => {
            const valido = Validacoes.validaNome(req.body.nome) &&
                Validacoes.validaEmail(req.body.email) &&
                Validacoes.validaTelefone(req.body.telefone);
            try {
                if (valido) {
                    const cliente = new ClienteModel(...Object.values(req.body));
                    const resposta = await Metodos.insereCliente(cliente);
                    res.status(201).json({ mensagem: resposta });
                } else {
                    throw new Error("Pedido invalido.");
                }

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        app.put('/users/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const clienteAtualizado = new ClienteModel(...Object.values(req.body));
                const resposta = await Metodos.atualizaPorId(id, clienteAtualizado);
                res.status(200).json({ mensagem: resposta });
            } catch (error) {
                res.status(400).json({ erro: error.message });
            }
        });

        app.delete('/users/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await Metodos.deletaPorId(id);
                res.status(200).json({ mensagem: resposta });
            } catch (error) {
                res.status(400).json({ erro: error.message });
            }
        });
    }
};

export default Controller;