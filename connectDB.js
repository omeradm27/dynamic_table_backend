const mongoose = require('mongoose');

//DATABASE E BAĞLAMA
const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database Connection is Succesfull"))
        .catch(err => console.error(err));
}

module.exports = connectDB;   