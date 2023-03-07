const Person = require('./api/models/person')
const mongoose = require('mongoose');
let uri = "mongodb+srv://mhallihamza:hamza1995@cluster0.co9cm4i.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connection established!");
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
    });
    //this for create one document
/*async function createPerson(){
    const person = new Person ({
        name : "hamza",
        age : 27,
        favoriteFoods : ["couscous","pezza"]
    });
    await person.save()
    .then((user) => {
        console.log('User created:', user);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      }); 
}
createPerson();
*/
//this for create many documents
/*Person.create([
    {name :  "adnane" , age : 21 , favoriteFoods : ['pezza','burritos'] },
    {name :  "taha" , age : 5 , favoriteFoods : ['pastilla','herrira','burritos'] },
    {name :  "amina" , age : 45 , favoriteFoods : ['pezza','burritos'] },
    {name :  "mohammed" , age : 31 , favoriteFoods : ['pezza','burritos','refissa'] },
    {name :  "kamal" , age : 38 , favoriteFoods : ['pezza','couscous'] },
]);*/
//Use model.find() to Search Your Database
/*Person.find({name:'reda'})
.then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  });*/
//Use model.findOne() to Return a Single Matching Document from Your Database
/*Person.findOne({name:'reda'})
.then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  })*/
//Use model.findById() to Search Your Database By _id
/*Person.findById('64067f3af247abb04bce0e4d')
.then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  })*/
//Perform Classic Updates by Running Find, Edit, then Save
  /*const userId = '6406859f84c89c7b916ece32'; // Replace with a valid ID
  Person.findOne({ _id: userId })
  .then((users)=>{
    users.age = 55;
    users.save();
    console.log(users)
  })
  .catch((err) => {
    console.error(err);
  })*/
//Perform New Updates on a Document Using model.findOneAndUpdate()
/*Person.findOneAndUpdate({name:"reda"},{age:85},{ new: true })
.then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  })*/
//Delete One Document Using model.findByIdAndRemove
/*Person.findByIdAndRemove('6406828995086996f1da6388')
.then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  })*/
//MongoDB and Mongoose - Delete Many Documents with model.remove()
/*Person.deleteOne({name:"hamza"})
.then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  })*/
//Chain Search Query Helpers to Narrow Search Results
Person.find({favoriteFoods:"burritos"})
  .sort({name:1})
  .limit(2)
  .select({name:true,favoriteFoods:true})
  .then((users)=>{
    console.log(users)
  })
  .catch((err) => {
    console.error(err);
  })

