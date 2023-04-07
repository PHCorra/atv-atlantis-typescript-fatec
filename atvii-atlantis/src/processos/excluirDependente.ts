import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExcluirDependente extends Processo {
  processar(): void {
    console.log("Iniciando a exclusão do dependente...");

    let titularASerExcluido = this.entrada.receberTexto(
      "Qual o nome do dependente à ser excluido?"
    );
    let armazem = Armazem.InstanciaUnica;
    var isUserFounded = false;
    var userNotFounded = "";

    armazem.Clientes.forEach((cliente, index) => {
      if (cliente.Dependentes[index].Nome === titularASerExcluido) {
        armazem.Clientes[index].Dependentes.slice(index, 1);
      }
    });

    console.log("Finalizando a exclusao do dependente...");
  }
}
//anotnio
