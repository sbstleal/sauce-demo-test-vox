import tarefasNavbar from "../../support/pagesObjects/navbar/tarefasNavbar";
import validacoesNavbar from "../../support/pagesObjects/navbar/validacoesNavbar";
import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import tarefasProdutos from "../../support/pagesObjects/produtos/tarefasProdutos";

describe("Menu", () => {
  beforeEach(() => {
    tarefasLogin.realizarLogin("usuario", "senha");
  });

  it("CT01 -  Validar se ao clicar em All Items irá para a tela de produtos.", () => {
    tarefasNavbar.clicarCarrinho();
    tarefasNavbar.clicarMenu();
    tarefasNavbar.clicarAllItems();
    validacoesNavbar.redirecionarPaginaProdutos();
  });

  it.skip("CT02 - Validar se ao clicar em About irá para a tela sauce labs.", () => {
    tarefasNavbar.clicarMenu();
    tarefasNavbar.clicarAbout();
    validacoesNavbar.redirecionarPaginaSobre();
  });

  it("CT03 - Validar se ao clicar em Logout irá para a tela de login.", () => {
    tarefasNavbar.clicarMenu();
    tarefasNavbar.clicarLogout();
    validacoesNavbar.redirecionarLogin();
  });

  it("CT04 - Validar se ao clicar em reset app state o carrinho esvaziará.", () => {
    tarefasProdutos.adicionarItensAoCarrinho();
    tarefasNavbar.clicarMenu();
    tarefasNavbar.clicarReset();
    validacoesNavbar.carrinhoEstaVazio();
  });
});
