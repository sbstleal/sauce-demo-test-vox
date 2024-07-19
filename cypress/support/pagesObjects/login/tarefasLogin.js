import { elementosLogin } from "./elementosLogin";

class TarefasLogin {
  entrarPaginalogin() {
    cy.visit("/");
  }

  preencherSenha(senha) {
    cy.get(elementosLogin.inputSenha).type(Cypress.env(senha));
  }

  preencherUsuario(usuario) {
    cy.get(elementosLogin.inputUsuario).type(Cypress.env(usuario));
  }

  clicarBotaoLogin() {
    cy.get(elementosLogin.botaoLogin).click();
  }

  realizarLogin(usuario, senha) {
    this.entrarPaginalogin();
    this.preencherUsuario(usuario);
    this.preencherSenha(senha);
    this.clicarBotaoLogin();
  }

  tentarLogarSemUsuario(senha) {
    this.entrarPaginalogin();
    this.preencherSenha(senha);
    this.clicarBotaoLogin();
  }

  tentarLogarSemSenha(usuario) {
    this.entrarPaginalogin();
    this.preencherUsuario(usuario);
    this.clicarBotaoLogin();
  }
}

export default new TarefasLogin();
