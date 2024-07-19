import { elementosCarrinho } from "./elementosCarrinho";

class ValidacoesCarrinho {
  itemExcluido() {
    cy.get(elementosCarrinho.itemCarrinho).should("not.exist");
  }
}

export default new ValidacoesCarrinho();
