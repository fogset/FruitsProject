
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myproject", { useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Banana",
  rating: 9,
  review: "very nice fruit"
});

//fruit.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const newPerson = mongoose.model("Person", personSchema);

const person = new newPerson({
  name: "John",
  age: 37
});
// person.save();


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
})
