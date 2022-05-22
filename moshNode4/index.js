const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
];
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id);
// });

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.query);
// });

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("course not found");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.valid(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);

  res.send(course);
});

addEventListener.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("course not found");
  res.send(course);

  const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  course.name = req.body.name;
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
