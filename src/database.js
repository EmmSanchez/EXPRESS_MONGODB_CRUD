import { mongoose } from 'mongoose'

// al momento de importarla en otro archivo, se ejecuta automáticamente, se importó a app.js
(async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://emmsanchez:DVBUJp05i5crJotX@crud-mongo.igaxikr.mongodb.net/?retryWrites=true&w=majority')
    console.log('DB connected to', db.connection.name)
  } catch (error) {
    console.log(error)
  }
})()
