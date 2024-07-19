import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import validacoesLogin from "../../support/pagesObjects/login/validacoesLogin";

describe("Login", () => {
  it("CT01 - Deve realizar login com sucesso com dados válidos.", () => {
    tarefasLogin.realizarLogin("usuario", "senha");
    validacoesLogin.loginComSucesso();
  });

  context(
    "CT02 - Deve exibir mensagem de falha ao inserir dados inválidos no login.",
    () => {
      it("Deve exibir erro ao inserir 'username' inválido", () => {
        tarefasLogin.realizarLogin("usuarioInvalido", "senha");
        validacoesLogin.loginIncorreto();
      });

      it("Deve exibir erro ao inserir 'password' inválido", () => {
        tarefasLogin.realizarLogin("usuario", "senhaInvalida");
        validacoesLogin.loginIncorreto();
      });
    }
  );

  context(
    "CT03 - Deve exibir erro ao tentar fazer login com campos vazios.",
    () => {
      it("Deve exibir erro ao tentar fazer login com 'username' vazio.", () => {
        tarefasLogin.tentarLogarSemUsuario("senha");
        validacoesLogin.usuarioObrigatorio();
      });

      it("Deve exibir erro ao tentar fazer login com 'password' vazio.", () => {
        tarefasLogin.tentarLogarSemSenha("usuario");
        validacoesLogin.senhaObrigatoria();
      });
    }
  );
});
