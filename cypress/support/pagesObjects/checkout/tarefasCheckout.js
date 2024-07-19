import { elementosCheckout } from "./elementosCheckout";

class TarefasCheckout {
  preencherNome(nome) {
    cy.get(elementosCheckout.inputNome).type(nome);
  }

  preencherSobrenome(sobrenome) {
    cy.get(elementosCheckout.inputSobrenome).type(sobrenome);
  }

  preencherCodigoPostal(codigoPostal) {
    cy.get(elementosCheckout.inputCodigoPostal).type(codigoPostal);
  }

  clicarBotaoContinue() {
    cy.get(elementosCheckout.botaoContinue).click();
  }

  clicarBotaoFinalizar() {
    cy.get(elementosCheckout.botaoFinalizar).click();
  }

  preencherDadosEContinuar(nome, sobrenome, codigoPostal) {
    this.preencherNome(nome);
    this.preencherSobrenome(sobrenome);
    this.preencherCodigoPostal(codigoPostal);
    this.clicarBotaoContinue();
  }
}

export default new TarefasCheckout();
