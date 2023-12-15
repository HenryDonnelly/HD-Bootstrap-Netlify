const mongoose = require('mongoose')
const uri = "mongodb+srv://henrydonny:SkZPJZ8sN9eziK9z@cluster0.z6a95wi.mongodb.net/?retryWrites=true&w=majority"
const connect = () => {
let db = null;
try {
mongoose.connect(uri);
console.log("Connected successfully to db!");
db = mongoose.connection;
} catch (error) {
console.log(error);
}
};
module.exports = connect;