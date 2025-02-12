import { TipoTransacao } from "./TipoTransacao.js";

//Type Alias
export type Transacao = {
  tipoTransacao: TipoTransacao;
  valor: number;
  data: Date;
};
