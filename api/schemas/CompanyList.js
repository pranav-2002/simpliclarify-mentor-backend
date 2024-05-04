import mongoose from 'mongoose'

const companyListSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  companyDomain: {
    type: String
  },
  companyLogo: {
    type: String,
    required: true
  }
})

const CompanyList = new mongoose.model('CompanyList', companyListSchema)

export default CompanyList
