
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

const fruit = new Fruit({
  // name: "Banana",
  rating: 34,
  review: "very nice fruit"
});
fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const newPerson = mongoose.model("Person", personSchema);

const person = new newPerson({
  name: "John",
  age: 37
});
 //person.save();


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

newPerson.deleteMany({name:"John"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Succesfully delete all related the document");
  }
});
