import { elementosNavbar } from "./elementosNavbar";

class TarefasNavbar {
  clicarCarrinho() {
    cy.get(elementosNavbar.selecionarCarrinho).click();
  }

  clicarAllItems() {
    cy.get(elementosNavbar.selecionarAllItems).click();
  }

  clicarAbout() {
    cy.get(elementosNavbar.selecionarAbout).click();
  }

  clicarLogout() {
    cy.get(elementosNavbar.selecionarLogout).click();
  }

  clicarReset() {
    cy.get(elementosNavbar.selecionarResetApp).click();
  }

  clicarMenu() {
    cy.get(elementosNavbar.selecionarMenu).click();
  }
}

export default new TarefasNavbar();
