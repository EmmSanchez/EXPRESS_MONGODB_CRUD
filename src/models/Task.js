import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
})
// trim: true         -> .trim() quita los espacios "   hola" -> "hola"
// default: false     -> Hace que donde sea falso (tarea no hecha)
// timestamps: true   -> Permite colocar propiedad updatedAt and createdAt
// versionKey: false   -> Evita el __v:0 que realiza mongoDB

export default model('Task', taskSchema) // SE IMPORTA EN index.routes.js
