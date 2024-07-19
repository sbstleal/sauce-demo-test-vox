import { elementosProdutos } from "./elementosProdutos";

class TarefasProdutos {
  adicionarMochilaAoCarrinho() {
    cy.get(elementosProdutos.selecionarItemMochila).click();
  }

  adicionarBicicletaAoCarrinho() {
    cy.get(elementosProdutos.selecionarItemBicicleta).click();
  }

  removerMochilaCarrinho() {
    cy.get(elementosProdutos.removerItemMochila).click();
  }

  adicionarItensAoCarrinho() {
    this.adicionarMochilaAoCarrinho();
    this.adicionarBicicletaAoCarrinho();
  }
}

export default new TarefasProdutos();
