import Menu from "../interfaces/menu";

export default class MenuExcluirClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Quem deseja excluir? `)
        console.log(`----------------------`)
        console.log(`| 1 - titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------`)
    }
}