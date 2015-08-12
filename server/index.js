import './debug'
import koa from 'koa'

const app = koa()

app.use(require('./assets'))

export default app

require('./home')
