export default class Validacoes {
    static validaNome(str) {
        let nomeV = /^[A-ZÁ-ÚÂ-ÛÃ-Õa-zá-úâ-ûã-ũç\ ]{2,}$/;
        return nomeV.test(str)
    }

    static validaTelefone(telefone){
        const telefoneNum = parseInt(telefone)
        return telefone.length == 11 && telefoneNum == telefone
    }

    static validaEmail(str) {
        const emailV = /^[a-z._0-9]+@[a-z]+.[a-z.]+$/;
        return emailV.test(str);
    }
}