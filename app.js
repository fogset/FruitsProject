
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myproject", { useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
      type: Number,
      min:1,
      max:10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);



const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const newPerson = mongoose.model("Person", personSchema);


const fruit = new Fruit({
  name: "Banana",
  rating: 34,
  review: "very nice fruit"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "great fruit"
});

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit"
});

//mango.save();

newPerson.updateOne({name: "John"}, {favouriteFruit:mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Succesfully updated the document");
  }
});

// const person = new newPerson({
//   name:"Amy",
//   age:12,
//   favouriteFruit: pineapple
// })
//  person.save();



// const person = new newPerson({
//   name: "John",
//   age: 37
// });
// person.save();


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
})

// Fruit.updateOne({_id:"603479159c844814e8d74088"}, {name:"Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully updated the document");
//   }
// });
//
// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully delete the document");
//   }
// });

// newPerson.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully delete all related the document");
//   }
// });
