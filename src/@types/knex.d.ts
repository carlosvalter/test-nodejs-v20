// Um hack para mostrar helper no VSCode
// definicao de tipos - uma forma de tipar as tabelas e campos para o eslint identificar automaticamente

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

// sobrepoem os types de tables do knex, que vem vazios por default
declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
