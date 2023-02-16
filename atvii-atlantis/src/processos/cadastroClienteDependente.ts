import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
    

        console.log('Iniciando o cadastro de um novo dependente...')
        let titular = this.entrada.receberTexto('Qual o nome do titular?')
        let nome = this.entrada.receberTexto('Qual o nome do novo dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica

        for(titular in armazem)
        

        console.log('Finalizando o cadastro do dependente...')
    }
}