import Prototipo from "../interfaces/prototipo"

export default class Endereco implements Prototipo {
    private rua: string
    private bairro: string
    private cidade: string
    private estado: string
    private pais: string
    private codigoPostal: string

    constructor(rua: string, bairro: string, cidade: string, estado: string, pais: string, codigoPostal: string) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.codigoPostal = codigoPostal
    }

    public get Rua() {return this.rua}
    public get Bairro() {return this.bairro}
    public get Cidade() {return this.cidade}
    public get Estado() {return this.estado}
    public get Pais() {return this.pais}
    public get CodigoPostal() {return this.codigoPostal}

    public set Rua(rua) {this.rua = rua};
    public set Bairro(bairro) {this.bairro = bairro};
    public set Cidade(cidade) {this.cidade = cidade};
    public set Estado(estado) {this.estado = estado};
    public set Pais(pais) {this.pais = pais};
    public set CodigoPostal(codigoPostal) {this.codigoPostal = codigoPostal}

    public clonar(): Prototipo {
        let endereco = new Endereco(this.rua, this.bairro, this.cidade, this.estado, this.pais, this.codigoPostal)
        return endereco
    }
}