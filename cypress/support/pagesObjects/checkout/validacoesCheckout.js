import { elementosCheckout } from "./elementosCheckout";

class ValidacoesCheckout {
  redirecionamentoCheckoutOverview() {
    cy.get(elementosCheckout.tituloPagina)
      .contains("Checkout: Overview")
      .should("be.visible");
  }

  sucessoCheckoutCompleto() {
    cy.get(elementosCheckout.tituloPagina)
      .contains("Checkout: Complete")
      .should("be.visible");
    cy.get(elementosCheckout.mensagemSucessoRealizarPedido)
      .contains("Thank you for your order!")
      .should("be.visible");
  }

  campoNomeObrigatorio() {
    cy.get(elementosCheckout.mensagemErroCampoObrigatorio)
      .contains("Error: First Name is required")
      .should("be.visible");
  }

  campoSobrenomeObrigatorio() {
    cy.get(elementosCheckout.mensagemErroCampoObrigatorio)
      .contains("Error: Last Name is required")
      .should("be.visible");
  }

  campoCodigoPostalObrigatorio() {
    cy.get(elementosCheckout.mensagemErroCampoObrigatorio)
      .contains("Error: Postal Code is required")
      .should("be.visible");
  }
}

export default new ValidacoesCheckout();
