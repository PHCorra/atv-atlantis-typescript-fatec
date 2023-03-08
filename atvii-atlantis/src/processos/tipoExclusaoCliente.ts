import Processo from "../abstracoes/processo";
import menuExcluirClientes from "../menus/menuExcluirClientes";
import ExcluirTitular from "./excluirTitular";


export default class TipoExclusaoCliente extends Processo {
    constructor(){
        super()
        this.menu = new menuExcluirClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirTitular()
                this.processo.processar()
                break;
            case 2:

                break;
        
            default:
                console.log('Opção não entendida... :(')
        }
    }
}