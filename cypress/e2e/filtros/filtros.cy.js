import tarefasFiltro from "../../support/pagesObjects/filtros/tarefasFiltro";
import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import opcaoFiltro from "../../fixtures/opcoesFiltro.json";
import validacoesProdutos from "../../support/pagesObjects/produtos/validacoesProdutos";

describe("Filtros ", () => {
  beforeEach(() => {
    tarefasLogin.realizarLogin("usuario", "senha");
  });

  it("CT01 - Validar se ao filtrar por Filtro de A a Z terá o resultado ordenado.", () => {
    tarefasFiltro.selecionarFiltro(opcaoFiltro.opcoes.nomeCrescente);
    validacoesProdutos.produtoOrdenadoNomeCrescente();
  });

  it("CT02 - Validar se ao filtrar po Filtro de Z a A terá o resultado ordenado.", () => {
    tarefasFiltro.selecionarFiltro(opcaoFiltro.opcoes.nomeDecrescente);
    validacoesProdutos.produtoOrdenadoNomeDecrescente();
  });

  it("CT03 - Validar se ao filtrar por Menor para Maior terá o resultado ordenado. ", () => {
    tarefasFiltro.selecionarFiltro(opcaoFiltro.opcoes.precoCrescente);
    validacoesProdutos.produtoOrdenadoPrecoCrescente();
  });

  it("CT04 - Validar se ao filtrar por Maior para Menor  terá o resultado ordenado. ", () => {
    tarefasFiltro.selecionarFiltro(opcaoFiltro.opcoes.precoDecrescente);
    validacoesProdutos.produtoOrdenadoPrecoDecrescente();
  });
});
