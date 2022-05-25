// const config = require("config");
// const helmet = require("helmet");
// const morgan = require("morgan");
const Joi = require("joi");
const logger = require("./logger");
const authenticate = require("./Authenticate");
const express = require("express");
const app = express();


app.set('vew engine', 'pug');
app.set('views', './views')


//config

// console.log('Application name'+ config.get('name'))
// console.log('Mail name'+ config.get('mail.host'))




// console.log(`Node Env is ${process.env.NODE_ENV}`);

// console.log(app.get('env'));

// app.use(express.json()); //middle function -> read req ant parse the body req
// //req.body
// req-->json()-->route()-->res



/// custome middleware func
// app.use(logger)
// app.use(authenticate)



// app.use(helmet());
// app.use(morgan('tiny'));




//built in middleware function
// app.use(express.urlencoded({ extended:true })); // key=value&key=value
// app.use(express.static('public'))


const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];
app.get("/", (req, res) => {
  res.render('index', { title:'My ex app', 'message':'Hello'})
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("course not found");
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("course not found");
  const { error } = validateCourse(req.body); // getting result.error
  if (error) return res.status(400).send(error.details[0].message);
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.valid(course, schema);
}

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("course not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.valid(course, schema);
}
// app.post();
// app.put();
// app.delete();

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`Listening to ${port}...`));
