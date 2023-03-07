import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento);
        
        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)
        console.log(armazem);

        var dependenteIsTrue = this.entrada.receberTexto('Deseja cadastrar um novo dependente? s/n')
        while(dependenteIsTrue.toLowerCase() === 's' || dependenteIsTrue.toLowerCase() === 'sim') {
            console.log('Iniciando o cadastro de um novo dependente...')
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
            let dependente = new Cliente(nome, nomeSocial, dataNascimento);
            dependente.Endereco = cliente.Endereco;
            cliente.Dependente = dependente
            var dependenteIsTrue = this.entrada.receberTexto('Deseja cadastrar um novo dependente? s/n')
        }


        console.log('Finalizando o cadastro do cliente...')
    }
}