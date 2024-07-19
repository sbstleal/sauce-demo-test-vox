import { elementosFiltro } from "./elementosFiltro";

class TarefasFiltro {
  selecionarFiltro(opcao) {
    cy.get(elementosFiltro.selecionarFiltro).select(opcao);
  }
}

export default new TarefasFiltro();
