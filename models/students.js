const mongoose = require('mongoose');

//Student Schema
const studentSchema = mongoose.Schema({
  firstname : {type : String},
  lastname : {type : String},
  vtuid : {type : String},
  email : {type : String}
})


// Export Module!
module.exports = mongoose.model('Student', studentSchema)
