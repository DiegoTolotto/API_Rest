import Metodos from "../DAO/Metodos.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

try {
    const criaTabela = await Metodos.criaTab();
    DatabaseMetodos.ativaChavesEstrangeiras()
    console.log(criaTabela)  
} catch (error) {
    console.log(error);
}