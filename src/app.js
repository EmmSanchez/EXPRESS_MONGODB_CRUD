import express from 'express'
import IndexRoutes from './routes/index.routes'
// import exphbs from 'express-handlebars'
import { create } from 'express-handlebars'
import path from 'path'
import './database'
import morgan from 'morgan'

const app = express()

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine(
  '.hbs',
  create({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaulLayout: 'main',
    extname: '.hbs'
  }).engine
)
app.set('view engine', '.hbs')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) // Hace disponible los datos en string del req.body

// Routes
app.use(IndexRoutes)

export default app
