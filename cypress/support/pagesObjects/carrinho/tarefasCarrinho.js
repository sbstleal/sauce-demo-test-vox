import { elementosCarrinho } from "./elementosCarrinho";

class TarefasCarrinho {
  removerItemCarrinho() {
    cy.get(elementosCarrinho.botaoRemoverItem).click();
  }

  clicarBotaoCheckout() {
    cy.get(elementosCarrinho.botaoCheckout).click();
  }
}

export default new TarefasCarrinho();
