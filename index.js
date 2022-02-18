const mongoose = require('mongoose');

//Map global promise
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect("mongodb+srv://azeem:passwordherecluster0.rgsko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const Student = require('./models/students');

// Add students

const addStudent = (student) => {
  Student.create(student).then(student => {
    console.info("New Student Added");
    mongoose.connection.close();
  })
}

// Find Customer

const findStudent = (name) =>{
  const search = new RegExp(name, 'i');
  Student.find({$or: [{firstname: search}, {lastname: search}]})
    .then(data => {
      console.info(data);
      console.info(`${data.length} matches found!`);
      mongoose.connection.close();
    });
}

// Update student

const updateStudent = (_id, student) => {
  Student.updateOne({_id}, student)
    .then(answers => {
      console.info("Student Data Updated")
      mongoose.connection.close();
    })
}

// Remove student

const removeStudent = (_id) => {
  Student.deleteOne({_id})
    .then(answers => {
      console.info("Student Data Removed")
      mongoose.connection.close();
    })
}

// List all student

const listStudents = () => {
  Student.find()
    .then(student => {
      console.info(student);
      console.info(`${student.length} found`);
      mongoose.connection.close();
    })
}

// Export All Methods!

module.exports = {
  addStudent,
  findStudent,
  updateStudent,
  removeStudent,
  listStudents
}
