require('dotenv').config()

const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

const uri = process.env.TEST_MONGODB_URI

mongoose.connect(uri)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })
  
const Note = mongoose.model('Note', noteSchema) 
  
const note = new Note({
    content: 'Quite hungry already',
    important: true,
})
  
note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
  })