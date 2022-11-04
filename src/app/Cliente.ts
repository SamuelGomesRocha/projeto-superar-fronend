export interface Cliente{
    idCliente?: number,
    nome: string,
    cnpj: string,
    cep:string,
    logradouro:string,
    bairro:string,
    cidade:string,
    uf:string,
    latitude?: number,
    longitude?: number,
    created_at?: string,
    updated_at?: string   
}