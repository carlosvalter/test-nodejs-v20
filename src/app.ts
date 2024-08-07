import fastify from 'fastify'
import { transactionsRouters } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

// a ordem de registro dos plugins sao levado em conta
app.register(fastifyCookie)

app.register(transactionsRouters, {
  prefix: 'transactions',
})
