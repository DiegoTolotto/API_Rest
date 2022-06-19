import Metodos from "../DAO/Metodos";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

try {
    DatabaseMetodos.ativaChavesEstrangeiras()
    const criaTabela = await Metodos.criaTab();  
} catch (error) {
    console.log(error.message);
}