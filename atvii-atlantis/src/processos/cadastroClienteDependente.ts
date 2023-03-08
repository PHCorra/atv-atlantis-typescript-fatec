import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

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

        armazem.Clientes.forEach(client => {
            if(client.Nome.toLowerCase() === titular.toLowerCase()) {
                dependente.Titular = client;
                client.Dependentes.push(dependente);
            } else {
                console.log()
            }
        })
        
        

        console.log('Finalizando o cadastro do dependente...')
    }
}