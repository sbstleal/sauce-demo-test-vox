import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import validacoesNavbar from "../../support/pagesObjects/navbar/validacoesNavbar";
import tarefasProdutos from "../../support/pagesObjects/produtos/tarefasProdutos";
import tarefasNavbar from "../../support/pagesObjects/navbar/tarefasNavbar";
import tarefasCarrinho from "../../support/pagesObjects/carrinho/tarefasCarrinho";
import validacoesCarrinho from "../../support/pagesObjects/carrinho/validacoesCarrinho";

describe("Carrinho", () => {
  beforeEach(() => {
    tarefasLogin.realizarLogin("usuario", "senha");
  });

  it("CT01 - Validar se ao clicar em add to card o produto aparerá no carrinho.", () => {
    tarefasProdutos.adicionarBicicletaAoCarrinho();
    validacoesNavbar.carrinhoContemItem();
  });

  it("CT02 - Validar se ao clicar em remove o produto sairá do carrinho.", () => {
    tarefasProdutos.adicionarMochilaAoCarrinho();
    tarefasProdutos.removerMochilaCarrinho();
    validacoesNavbar.carrinhoEstaVazio();
  });

  it("CT03 - Validar se ao clicar em remove o produto sairá da listagem.", () => {
    tarefasProdutos.adicionarBicicletaAoCarrinho();
    tarefasNavbar.clicarCarrinho();
    tarefasCarrinho.removerItemCarrinho();
    validacoesCarrinho.itemExcluido();
  });
});
