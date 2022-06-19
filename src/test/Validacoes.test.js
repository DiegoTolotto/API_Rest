import Validacoes from "../services/Validacoes";

test("Verificar se o nome tem apenas letras.", () => {
    expect(Validacoes.validaNome("Diego Nunes Tolotto")).toBe(true);
});

test("Verificar se o nome tem apenas letras.", () => {
    expect(Validacoes.validaNome("D1eg0 Nun3s T0l0tt0")).toBe(false);
});

test("Verificar se o nome tem pelo menos duas letras.", () => {
    expect(Validacoes.validaNome("D")).toBe(false);

    test("Verificar se o telefone possui apenas dígitos.", () => {
        expect(ClienteValidacoes.validaTelefone("(21) 9l23A5678")).toBe(false);
    });
    
    test("Verificar se o telefone possui DDD.", () => {
        expect(ClienteValidacoes.validaTelefone("912345678")).toBe(false);
    });
    
    test("Verificar se o email contem apenas letras minúsculas.", () => {
        expect(ClienteValidacoes.validaEmail("dOuGlAs@gmail.com")).toBe(false);
    });
    
    test("Verificar se o email contem @.", () => {
        expect(ClienteValidacoes.validaEmail("douglasgmail.com")).toBe(false);
    });
    
    test("Verificar se um email existente é válido.", () => {
        expect(ClienteValidacoes.validaEmail("douglasmontes.dev@gmail.com")).toBe(true);
    });
});