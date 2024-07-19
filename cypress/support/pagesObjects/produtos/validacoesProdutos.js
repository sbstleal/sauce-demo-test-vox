import { elementosProdutos } from "./elementosProdutos";

class ValidacoesProdutos {
  produtoOrdenadoNomeCrescente() {
    cy.get(elementosProdutos.selecionarItem)
      .first()
      .should("contain", "Sauce Labs Backpack");
  }

  produtoOrdenadoNomeDecrescente() {
    cy.get(elementosProdutos.selecionarItem)
      .first()
      .should("contain", "Test.allTheThings() T-Shirt (Red)");
  }

  produtoOrdenadoPrecoCrescente() {
    cy.get(elementosProdutos.selecionarItem)
      .first()
      .should("contain", "Sauce Labs Onesie");
  }

  produtoOrdenadoPrecoDecrescente() {
    cy.get(elementosProdutos.selecionarItem)
      .first()
      .should("contain", "Sauce Labs Fleece Jacket");
  }
}

export default new ValidacoesProdutos();
