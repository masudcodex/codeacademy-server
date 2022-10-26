const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.port || 5000 ;


app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')
const cart = require('./data/cart.json')

app.get('/', (req, res) => {
  res.send('CodeAcademy API running')
})

app.get('/category', (req, res) => {
  res.send(categories)
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const category_course = courses.filter(n => n.category_id === id);
  res.send(category_course);
})

app.get('/course', (req, res) =>{
  res.send(courses);
});

app.get('/course/:id',(req, res)=>{
  const id = req.params.id;
  const selectedCourse = courses.find(n=> n._id === id);
  res.send(selectedCourse)
})

app.get('/course/:id/cart', (req, res)=>{
  const id = req.params.id;
  const selectCourseCart = cart.find(n=>n._id === id);
  res.send(selectCourseCart)
})

app.listen(port, () => {
  console.log(`CodeAcademy API is running on port ${port}`)
})