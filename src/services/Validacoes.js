export default class Validacoes {
    static validaNome(str) {
        let nomeV = /^[A-ZÁ-ÚÂ-ÛÃ-Õa-zá-úâ-ûã-ũç\ ]{2,}$/;
        return nomeV.test(str)
    }

    static validaTelefone(str) {
        const telV = /^\([0-9]{2}\) ?9[0-9]{4}-?[0-9]{4}$/
        return telV.test(str);
    }

    static validaEmail(str) {
        const emailV = /^[a-z._0-9]+@[a-z]+.[a-z.]+$/;
        return emailV.test(str);
    }
}