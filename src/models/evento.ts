import { RowDataPacket } from "mysql2";

export default interface IEvento extends RowDataPacket  {
    id: number;
    nome: string;
    data_evento: Date;
    hora_evento: string;
    preco: number;
    descricao: string;
    local: string;

}