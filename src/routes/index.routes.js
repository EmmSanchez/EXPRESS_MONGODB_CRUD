import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/', async (req, res) => {
  // Buscar objetos de la colección
  const tasks = await Task.find().lean() // lean() -> Devuelve objetos de js, no de mongodb

  // Mandarlos a index.hbs
  res.render('index', { tasks })
})

router.post('/tasks/add', async (req, res) => {
  try {
    const task = Task(req.body)
    // Añadirlo a mongodb
    await task.save()

    res.redirect('/')
  } catch (error) {
    // Cuando un titulo ya existe
    console.log(error)
  }
})

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/edit', (req, res) => {
  res.render('edit')
})

export default router // SE IMPORTA EN app.js
