import { elementosLogin } from "../login/elementosLogin";
import { elementosProdutos } from "../produtos/elementosProdutos";
import { elementosSobre } from "../sobre/elementosSobre";
import { elementosNavbar } from "./elementosNavbar";

class ValidacoesNavbar {
  redirecionarPaginaProdutos() {
    cy.get(elementosProdutos.tituloPaginaProdutos)
      .contains("Products")
      .should("be.visible");
  }

  redirecionarPaginaSobre() {
    cy.get(elementosSobre.tituloPaginaSobre).should("be.visible");
  }

  redirecionarLogin() {
    cy.get(elementosLogin.inputUsuario).should("be.visible");
  }

  carrinhoEstaVazio() {
    cy.get(elementosNavbar.quantidadeItensCarrinho).should("not.exist");
  }

  carrinhoContemItem() {
    cy.get(elementosNavbar.quantidadeItensCarrinho).should("contain", "1");
  }
}

export default new ValidacoesNavbar();
