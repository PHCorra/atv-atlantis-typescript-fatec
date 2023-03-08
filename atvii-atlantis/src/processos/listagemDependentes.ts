import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let titular = this.entrada.receberTexto('Qual o nome do titular dos dependentes?')
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.forEach(cliente => {
            if (cliente.Nome.toLowerCase() === titular.toLowerCase()) {
                cliente.Dependentes.forEach(dependente => {
                    this.impressor = new ImpressaorCliente(dependente)
                    console.log(this.impressor.imprimir())
                })
            } 
        })
    }

}