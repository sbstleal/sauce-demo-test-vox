import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import tarefasProdutos from "../../support/pagesObjects/produtos/tarefasProdutos";
import tarefasNavbar from "../../support/pagesObjects/navbar/tarefasNavbar";
import tarefasCarrinho from "../../support/pagesObjects/carrinho/tarefasCarrinho";
import tarefasCheckout from "../../support/pagesObjects/checkout/tarefasCheckout";
import dadosCheckout from "../../fixtures/dadosCheckout.json";
import validacoesCheckout from "../../support/pagesObjects/checkout/validacoesCheckout";

describe("Checkout", () => {
  beforeEach(() => {
    tarefasLogin.realizarLogin("usuario", "senha");
    tarefasProdutos.adicionarBicicletaAoCarrinho();
    tarefasNavbar.clicarCarrinho();
    tarefasCarrinho.clicarBotaoCheckout();
  });

  it("CT01 - Validar se ao realizar os passos corretos a compra terá sucesso.", () => {
    tarefasCheckout.preencherDadosEContinuar(
      dadosCheckout.nome,
      dadosCheckout.sobrenome,
      dadosCheckout.codigoPostal
    );
    validacoesCheckout.redirecionamentoCheckoutOverview();
  });

  context(
    "CT02 - Validar se ao não inserir dados obrigatórios no checkout aparecerá a mensagem de erro.",
    () => {
      it("Mensagem nome obrigatório", () => {
        tarefasCheckout.clicarBotaoContinue();
        validacoesCheckout.campoNomeObrigatorio();
      });

      it("Mensagem sobrenome obrigatório", () => {
        tarefasCheckout.preencherNome(dadosCheckout.nome);
        tarefasCheckout.clicarBotaoContinue();
        validacoesCheckout.campoSobrenomeObrigatorio();
      });

      it("Mensagem código postal obrigatório", () => {
        tarefasCheckout.preencherNome(dadosCheckout.nome);
        tarefasCheckout.preencherSobrenome(dadosCheckout.sobrenome);
        tarefasCheckout.clicarBotaoContinue();
        validacoesCheckout.campoCodigoPostalObrigatorio();
      });
    }
  );

  it("CT03 - Validar sucesso ao finalizar o checkout.", () => {
    tarefasCheckout.preencherDadosEContinuar(
      dadosCheckout.nome,
      dadosCheckout.sobrenome,
      dadosCheckout.codigoPostal
    );
    tarefasCheckout.clicarBotaoContinue();
    tarefasCheckout.clicarBotaoFinalizar();
    validacoesCheckout.sucessoCheckoutCompleto();
  });
});
