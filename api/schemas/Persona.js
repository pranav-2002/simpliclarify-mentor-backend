import mongoose from 'mongoose'

const personaSchema = mongoose.Schema({
  personaType: {
    type: String,
    enum: ['MASTERS', 'JOB', 'ENTREPRENEURSHIP'],
    required: true
  },
  totalCount: {
    type: Number
  }
})

const Persona = new mongoose.model('Persona', personaSchema)

export default Persona
