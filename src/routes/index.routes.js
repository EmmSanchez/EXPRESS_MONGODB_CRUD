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

router.get('/edit/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean()

    res.render('edit', { task }) // utilizar tasks en edit.hbs
  } catch (error) {
    console.log(error.message)
  }
})

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params
  await Task.findByIdAndUpdate(id, req.body)
  res.redirect('/')
})

export default router // SE IMPORTA EN app.js
