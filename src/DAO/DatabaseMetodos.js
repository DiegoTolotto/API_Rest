
import Database from "../infra/Database.js";

class DatabaseMetodos {
    static ativaChavesEstrangeiras() {
        const query = 'PRAGMA foreign_keys = ON';

        Database.run(query, error => {
            if (error)
                console.log(error.message);
            else
                console.log('Chaves estrangeiras ativadas com sucesso.');
        });
    }
}

export default DatabaseMetodos;