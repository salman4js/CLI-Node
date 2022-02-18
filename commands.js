#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const{
  addStudent,
  findStudent,
  updateStudent,
  removeStudent,
  listStudents
} = require('./index');

// Student Questions

const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : "Student Firstname -- "
  },
  {
    type : 'input',
    name : 'lastname',
    message : "Student Last Name -- "
  },
  {
    type : 'input',
    name : "vtuid",
    message : "Student VTU ID -- "
  },
  {
    type : "input",
    name : "email",
    message : "Student Email Address -- "
  }
]



program
  .version('1.0.0')
  .description('Student Management System!');

// Add Command
program
  .command('add')
  .alias("a")
  .description("Add Student")
  .action(() => {
    prompt(questions).then(answers => addStudent(answers));
  })

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description("Find Student")
  .action(name => findStudent(name));


// Update command

program
  .command('update <_id>')
  .alias('u')
  .description("Update Student")
  .action(_id => {
    prompt(questions).then(answers => updateStudent(_id, answers));
  })

// Remove student
program
  .command('remove <_id>')
  .alias('r')
  .description("Remove Student")
  .action(_id => removeStudent(_id));

// List all student

program
  .command('lists')
  .alias('l')
  .description("List all students")
  .action(() => listStudents());

program.parse(process.argv);
