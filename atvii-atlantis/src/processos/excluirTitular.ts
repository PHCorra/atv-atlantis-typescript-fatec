import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExcluirTitular extends Processo {
    processar(): void {
    

        console.log('Iniciando a exclusão do titular...')


        
        let titularASerExcluido = this.entrada.receberTexto('Qual o nome do titular à ser excluido?')
        let armazem = Armazem.InstanciaUnica
        var isUserFounded = false
        var userNotFounded = ""

        armazem.Clientes.forEach((cliente, index) =>  {
           if(cliente.Nome.toLowerCase() === titularASerExcluido.toLowerCase()) {
                armazem.Clientes.splice(index, 1);
            }
        })

        console.log('Finalizando a exclusao do titular...')
    }
}