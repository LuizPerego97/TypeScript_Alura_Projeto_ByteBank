import { Transacao } from "./Transacao.js";

// Type Alias
export type GrupoTransacao = {
  label: string;
  transacoes: Transacao[];
};
